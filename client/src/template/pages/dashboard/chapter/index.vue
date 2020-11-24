<template>
	<div class="">
		<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
				<div class="flex justify-between w-full">
					<h1 class="flex text-lg font-medium text-gray-900">Chapitres</h1>
					<nuxt-link to="/dashboard/chapter/create" class="flex rounded-lg cursor-pointer hover:bg-orange-600 transition duration-150 ease-in-out bg-orange-500 px-5 py-2 font-bold text-white">Créer</nuxt-link>
				</div>
			</div>
		</main>
		<div class="w-3/5 mt-5 flex justify-between">
			<h1 class="px-12">Partie</h1>
			<h1>Numéro</h1>
			<h1>Chapitre</h1>
		</div>
		<div class="px-8 mt-6">
			<div v-for="(chapter, key) in chapters" class="border px-4 py-3 w-full flex justify-between mb-4 shadow-sm rounded" :key="key">
				<div class="flex">
					<nuxt-link :to="`/dashboard/part/${chapter.part_id}`" class="hover:text-orange-700">{{ chapter.part.label }} </nuxt-link>
				</div>
				<p>{{ chapter.id }}</p>
				<p>{{ chapter.title }}</p>
				<div class="flex flex-row">
					<nuxt-link :to="'/dashboard/chapter/' + chapter.id" class="bg-blue-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-blue-500"><i class="icon-pencil text-red"></i></nuxt-link>
					<button @click.prevent="openModal(chapter.id)" class="bg-red-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-red-500"><i class="icon-trash text-white-500 bg-red-500"></i></button>
				</div>
				<div v-if="state.modal == chapter.id" class="fixed z-10 inset-0 overflow-y-auto">
					<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div class="fixed inset-0 transition-opacity" aria-hidden="true">
							<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>

						<!-- This element is to trick the browser into centering the modal contents. -->
						<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

						<div
							class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
							role="dialog"
							aria-modal="true"
							aria-labelledby="modal-headline"
						>
							<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div class="sm:flex sm:items-start">
									<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
										<!-- Heroicon name: exclamation -->
										<svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
											/>
										</svg>
									</div>
									<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline ">
											Suppression
										</h3>
										<div class="mt-2">
											<p class="text-sm text-gray-500">
												Voulez vous vraiment supprimer ?
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									@click.prevent="handleDelete(chapter.id)"
									class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Supprimer
								</button>
								<button
									type="button"
									@click.prevent="closeModal"
									class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, useContext, useAsync, reactive } from '@nuxtjs/composition-api'
export default {
	layout: 'dashboard',

	setup() {
		const { store } = useContext()

		const state = reactive({ modal: null })
		const openModal = (id) => (state.modal = id)
		const closeModal = () => (state.modal = null)

		store.dispatch('chapters/INDEX')
		const chapters = computed(() => store.state.chapters.data)

		async function handleDelete(id) {
			await store.dispatch('chapters/DELETE', id)
		}

		return { chapters, handleDelete, openModal, closeModal, state }
	},
}
</script>

<style lang="scss" scoped></style>
