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
		<div class="px-8 mt-6">
			<div v-for="(chapter, key) in chapters" class="border px-4 py-3 w-full flex justify-between mb-4 shadow-sm rounded" :key="key">
				<div class="flex">
					<p class="flex pr-2">Partie :</p>
					<nuxt-link :to="`/dashboard/part/${chapter.part_id}`" class="hover:text-orange-700">{{ chapter.part.label }} </nuxt-link>
				</div>
				<p>{{ chapter.id }}</p>
				<p>{{ chapter.title }}</p>
				<div class="flex flex-row">
					<nuxt-link :to="'/dashboard/chapter/' + chapter.id" class="bg-blue-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-blue-500"><i class="icon-pencil text-red"></i></nuxt-link>
					<button @click.prevent="handleDelete(chapter.id)" class="bg-red-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-red-500"><i class="icon-trash text-white-500 bg-red-500"></i></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api'
export default {
	layout: 'dashboard',

	setup() {
		const { store } = useContext()
		store.dispatch('chapters/INDEX')
		const chapters = computed(() => store.state.chapters.data)

		async function handleDelete(id) {
			await store.dispatch('chapters/DELETE', id)
		}

		return { chapters, handleDelete }
	},
}
</script>

<style lang="scss" scoped></style>
