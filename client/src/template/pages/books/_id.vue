<template>
	<main class="calculed-height">
		<div class="flex justify-center w-full bg-teal-lighter">
			<div class="w-1/2 bg-orange-300 rounded shadow-lg p-8">
				<div class="flex flex-col mb-4 md:w-full">
					<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre du livre</label>
					<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="label" />
				</div>
				<div class="flex flex-col mb-4 md:w-full text-center">
					<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Description du livre</label>
					<textarea rows="5" class="border px-3 text-grey-darkest" id="email" v-model="description" />
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
			await store.dispatch('books/INDEX')

			await store.dispatch('books/SHOW', params.value.id)
		})

		const label = computed(() => store.state.books.item.label)
		const description = computed(() => store.state.books.item.description)

		return { label, description }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 232px - 48px);
}
</style>
