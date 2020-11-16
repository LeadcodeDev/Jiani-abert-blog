<template>
	<main class="calculed-height">
		<div class="flex justify-center w-full bg-teal-lighter">
			<div class="w-1/2 bg-orange-300 rounded shadow-lg p-8">
				<div class="flex flex-col mb-4 md:w-full">
					<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre du poème</label>
					<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="title" />
				</div>
				<div class="flex flex-col mb-4 md:w-full text-center">
					<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Contenu du poème</label>
					<textarea rows="5" class="border px-3 text-grey-darkest" id="email" v-model="content" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive, computed, useContext, useAsync } from '@nuxtjs/composition-api' // import de fonction, permet d'utiliser des hooks de vuejs3

export default {
	layout: 'master',

	// function disponible depuis vue3 qui permet de regrouper tout le code d'une même fonctionnalité au même endroit
	setup() {
		const { store, params } = useContext()

		useAsync(async () => {
			// récupère tout les livres et les met à disposition dans le state.books.data
			await store.dispatch('poemes/INDEX')
			// afficher un livre sur la page en fonction de son id
			await store.dispatch('poemes/SHOW', params.value.id)
		})

		const title = computed(
			 () => store.state.poemes.item.title,
		)
		
		const content = computed(
			() => store.state.poemes.item.content,
		)

		return { title, content }
	},
}
</script

<style>
.calculed-height {
	min-height: calc(100vh - 232px - 48px);
}
</style>
