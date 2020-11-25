<template>
	<main v-if="state.loaded" class="min-h-screen">
		<div class="flex justify-center w-full bg-teal-lighter my-16 min-h">
			<div class="bg-blue-500 relative w-1/2 flex-none shadow rounded-3xl">
				<div class="w-full relative flex-none -ml-full p-10 shadow-lg rounded-3xl transform shadow-lg bg-gradient-to-br from-blue-400 to-yellow-200 -rotate-3">
					<div class="w-full flex justify-between transform rotate-3">
						<div class="flex text-2xl font-bold">Titre de ma partie</div>
						<div class="flex">Titre de mon chapitre</div>
					</div>
					<div class="w-full relative flex justify-center bg-opacity-50 rounded self-center transform rotate-3">
						Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans. Richard McClintock,
						professeur de latin au Hampden-Sydney College en Virginie, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage du Lorem Ipsum, et en parcourant les citations du mot dans la littérature classique, a
						découvert la source incontestable. Lorem Ipsum provient des sections 1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" (Les Extrêmes du Bien et du Mal) de Cicéron, écrit en 45 av. Ce livre est un traité sur la théorie de
						l'éthique, très populaire à la Renaissance. La première ligne du Lorem Ipsum, "Lorem ipsum dolor sit amet ..", provient d'une ligne de la section 1.10.32.Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
						un texte aléatoire. Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans. Richard McClintock, professeur de latin au Hampden-Sydney College en Virginie, a recherché
						l'un des mots latins les plus obscurs, consectetur, d'un passage du Lorem Ipsum, et en parcourant les citations du mot dans la littérature classique, a découvert la source incontestable. Lorem Ipsum provient des sections
						1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" (Les Extrêmes du Bien et du Mal) de Cicéron, écrit en 45 av. Ce livre est un traité sur la théorie de l'éthique, très populaire à la Renaissance. La première ligne du Lorem
						Ipsum, "Lorem ipsum dolor sit amet ..", provient d'une ligne de la section 1.10.32.Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement un texte aléatoire. Il a ses racines dans un morceau de littérature
						latine classique de 45 avant JC, ce qui en fait plus de 2000 ans. Richard McClintock, professeur de latin au Hampden-Sydney College en Virginie, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage du
						Lorem Ipsum, et en parcourant les citations du mot dans la littérature classique, a découvert la source incontestable. Lorem Ipsum provient des sections 1.10.32 et 1.10.33 de "de Finibus Bonorum et Malorum" (Les Extrêmes du
						Bien et du Mal) de Cicéron, écrit en 45 av. Ce livre est un traité sur la théorie de l'éthique, très populaire à la Renaissance. La première ligne du Lorem Ipsum, "Lorem ipsum dolor sit amet ..", provient d'une ligne de la
						section 1.10.32.
					</div>
				</div>
			</div>
		</div>
		{{
			`http://localhost:3000/books/${$store.state.books.item.label}/${$store.state.books.item.id}/${$store.state.books.currentChapters[$route.params.id].parts}/${$store.state.books.currentChapters[$route.params.id].label}/${
				$store.state.books.currentChapters[$route.params.id].id
			}`
		}}
	</main>
</template>

<script>
import { reactive, computed, useContext, useAsync } from '@nuxtjs/composition-api' // import de fonction, permet d'utiliser des hooks de vuejs3

export default {
	layout: 'master',

	// function disponible depuis vue3 qui permet de regrouper tout le code d'une même fonctionnalité au même endroit
	setup() {
		const { store, params } = useContext()
		// évite de demander un affichage de dooné pas encore réçu
		const state = reactive({ loaded: false })

		// évite de demander un affichage de dooné pas encore réçu
		useAsync(async () => {
			await store.dispatch('books/INDEX')

			await store.dispatch('books/SHOW', params.value.book_id)
			await store.commit('books/setupChapters')

			// évite de demander un affichage de dooné pas encore réçu
			state.loaded = true
		})

		const picture = computed(() => store.state.books.item.picture)

		const book = computed(() => store.state.books.item)
		const parts = computed(() => store.state.parts.item)
		const chapters = computed(() => store.state.chapters.item)

		return { state, book, picture, parts, chapters }
	},
}
</script>

<style></style>
