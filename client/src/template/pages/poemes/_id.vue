<template>
	<main class="calculed-height py-5 back">
		<div v-if="state.loaded" class="flex justify-center w-full bg-teal-lighter">
			<div class="w-2/3 flex bg-orange-300 p-5 rounded-lg">
				<div class="w-1/3 flex justify-center">
					<img :src="`http://localhost:3333/api/uploads/poeme/${poeme.picture.filename}`" class="object-cover w-1/2 h-48" alt="Sunset in the mountains" />
				</div>
				<div class="w-2/3 mx-auto flex flex-col">
					<div class="font-bold text-3xl pl-4">
						<h2>Jiani-Abert</h2>
					</div>

					<div class="flex mb-4 text-center text-3xl pl-3">
						<h1>{{ poeme.title }}</h1>
					</div>
					<div class="w-full flex">
						<div class="flex flex-col mb-4 py-2 px-3 w-full justify-center">
							<pre lang="fr" class="whitespace-pre-line border text-grey-darkest bg-transparent border-none" disabled type="text"> {{ poeme.content }}</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive, computed, useContext, useAsync, onMounted, ref } from '@nuxtjs/composition-api' // import de fonction, permet d'utiliser des hooks de vuejs3

export default {
	layout: 'master',

	// function disponible depuis vue3 qui permet de regrouper tout le code d'une même fonctionnalité au même endroit
	setup() {
		const { store, params } = useContext()
		const state = reactive({ loaded: false })

		useAsync(async () => {
			// récupère tout les livres et les met à disposition dans le state.books.data
			await store.dispatch('poemes/INDEX')
			// afficher un livre sur la page en fonction de son id
			await store.dispatch('poemes/SHOW', params.value.id)
			state.loaded = true
		})

		const poeme = computed(() => store.state.poemes.item)

		return { state, poeme }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 48px);
}
</style>
