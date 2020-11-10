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
		<div class="flex items-center h-screen justify-center w-full bg-teal-lighter">
			<div class="w-1/2 bg-orange-300 rounded shadow-lg p-8">
				<h1 class="flex w-full text-center font-bold justify-center text-lg text-grey-darkest mb-6">Créer un livre</h1>
				<form class="mb-4" action="/" method="post">
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre du livre</label>
						<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="label" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Résumé du livre</label>
						<textarea rows="5" class="border px-3 text-grey-darkest" id="email" v-model="description" />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, computed, useContext } from '@nuxtjs/composition-api' // import de fonction, permet d'utiliser des hooks de vuejs3

export default {
	layout: 'dashboard',

	// function disponible depuis vue3 qui permet de regrouper tout le code d'une même fonctionnalité au même endroit
	setup() {
		const { store, params } = useContext()
		store.dispatch('books/INDEX')
		store.dispatch('books/SHOW', params.value.id)
		const label = computed({
			get: () => store.state.books.item.label,
			set: (value) => store.commit('books/_UPDATE_LABEL', value),
		})

		const description = computed({
			get: () => store.state.books.item.description,
			set: (value) => store.commit('books/_UPDATE_DESCRIPTION', value),
		})

		//event de validation
		async function handleSubmit() {
			await store.dispatch('books/UPDATE')
		}

		return { handleSubmit, label, description }
	},
}
</script>

<style></style>
