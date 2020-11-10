<template>
	<div class="">
		<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
				<div class="flex justify-between w-full">
					<h1 class="flex text-lg font-medium text-gray-900">Poèmes</h1>
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
						<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="title" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Résumé du livre</label>
						<textarea rows="5" class="border px-3 text-grey-darkest" id="email" v-model="content" />
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

		// récupère tout les livres et les met à disposition dans le state.books.data
		store.dispatch('poemes/INDEX')
		// afficher un livre sur la page en fonction de son id
		store.dispatch('poemes/SHOW', params.value.id)

		// on récupère avec get et on modifie avec set le label
		// on change le state de l'item avec un commit ( interaction unique avec le state )
		const title = computed({
			get: () => store.state.poemes.item.title,
			set: (value) => store.commit('poemes/_UPDATE_TITLE', value),
		})
		// on récupère avec get et on modifie avec set la description
		// on change le state de l'item avec un commit ( interaction unique avec le state )
		const content = computed({
			get: () => store.state.poemes.item.content,
			set: (value) => store.commit('poemes/_UPDATE_CONTENT', value),
		})

		// event de validation qui update le state pour déclencher la maj qui s'effectuera avec un dispatch
		const handleSubmit = async () => await store.dispatch('poemes/UPDATE')

		return { handleSubmit, title, content }
	},
}
</script>

<style></style>
