<template>
	<div class="">
		<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
				<div class="flex justify-between w-full">
					<h1 class="flex text-lg font-medium text-gray-900">Livres</h1>
					<!-- @click.prevent permet de supprimer le comportement par d"fault du bouton, ne recharge pas la page -->
					<button class="flex rounded-lg cursor-pointer hover:bg-orange-600 transition duration-150 ease-in-out bg-orange-500 px-5 py-2 font-bold text-white" @click.prevent="handleSubmit">Sauvegarder</button>
				</div>
			</div>
		</main>
		<div class="flex justify-center w-full bg-teal-lighter">
			<div class="w-1/2 bg-orange-300 rounded shadow-lg p-8">
				<h1 class="flex w-full text-center font-bold justify-center text-lg text-grey-darkest mb-6">Modifier mon livre</h1>
				<form class="mb-4" action="/" method="post">
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre du livre</label>
						<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="label" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Résumé du livre</label>
						<textarea rows="5" class="border px-3 text-grey-darkest h-custom" id="email" v-model="description" />
					</div>

					<div class="flex pt-5">
						<div class="px-2 w-full">
							<div class="mt-2 sm:mt-0 sm:col-span-2">
								<label for="picture" class="cursor-pointer flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<template v-if="!picture">
										<div class="text-center">
											<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
												<path
													d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
											<p class="mt-1 text-sm text-gray-600">
												<span type="button" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out cursor-pointer">Upload a file</span>
											</p>
											<p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
										</div>
									</template>
									<template v-else>
										<div class="flex flex-wrap">
											<div class="relative w-full m-1">
												<img :src="`http://localhost:3333/api/uploads/book/${picture.filename}`" class="rounded-lg w-full h-full object-cover" alt="" />
											</div>
										</div>
									</template>
								</label>
								<input type="file" name="picture" id="picture" class="hidden" @change="handleChange" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, computed, useContext, useAsync } from '@nuxtjs/composition-api' // import de fonction, permet d'utiliser des hooks de vuejs3

export default {
	layout: 'dashboard',

	// function disponible depuis vue3 qui permet de regrouper tout le code d'une même fonctionnalité au même endroit
	setup() {
		const { store, params } = useContext()

		useAsync(async () => {
			// récupère tout les livres et les met à disposition dans le state.books.data
			await store.dispatch('books/INDEX')
			// afficher un livre sur la page en fonction de son id
			await store.dispatch('books/SHOW', params.value.id)
		})

		// on récupère avec get et on modifie avec set le label
		// on change le state de l'item avec un commit ( interaction unique avec le state )
		const label = computed({
			get: () => store.state.books.item.label,
			set: (value) => store.commit('books/_UPDATE_LABEL', value),
		})
		// on récupère avec get et on modifie avec set la description
		// on change le state de l'item avec un commit ( interaction unique avec le state )
		const description = computed({
			get: () => store.state.books.item.description,
			set: (value) => store.commit('books/_UPDATE_DESCRIPTION', value),
		})

		const picture = computed(() => store.state.books.item.picture)

		// event de validation qui update le state pour déclencher la maj qui s'effectuera avec un dispatch
		async function handleSubmit() {
			await store.dispatch('books/UPDATE')
		}
		async function handleChange(e) {
			await store.dispatch('books/UPDATE_PICTURE', e.target.files[0])
			e.target.value = ''
		}

		return { handleSubmit, label, description, picture, handleChange }
	},
}
</script>

<style>
.h-custom {
	height: 400px;
}
</style>
