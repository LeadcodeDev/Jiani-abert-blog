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
				<h1 class="flex w-full text-center font-bold justify-center text-lg text-grey-darkest mb-6">Modifier ma partie</h1>
				<form class="mb-4" action="/" method="post">
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre de la partie</label>
						<input class="border py-2 px-3 text-grey-darkest2" type="text" id="first_name" v-model="label" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Résumé de la partie</label>
						<textarea rows="5" class="border px-3 text-grey-darkest" id="email" v-model="description" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<v-select label="label" :options="books" v-model="book" :reduce="(book) => book.id"></v-select>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, computed, useContext, useAsync } from '@nuxtjs/composition-api'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
	layout: 'dashboard',
	components: {
		'v-select': vSelect,
	},

	setup() {
		const { store, params } = useContext()

		useAsync(async () => {
			await store.dispatch('books/INDEX')
			await store.dispatch('parts/INDEX')
			await store.dispatch('parts/SHOW', params.value.id)
		})
		const books = computed(() => store.state.books.data)

		const label = computed({
			get: () => store.state.parts.item.label,
			set: (value) => store.commit('parts/_UPDATE_LABEL', value),
		})
		const description = computed({
			get: () => store.state.parts.item.description,
			set: (value) => store.commit('parts/_UPDATE_DESCRIPTION', value),
		})

		const book = computed({
			get: () => store.state.parts.item.book_id,
			set: (value) => store.commit('parts/_UPDATE_BOOKS', value),
		})

		async function handleSubmit() {
			await store.dispatch('parts/UPDATE')
		}

		return { label, description, book, books, handleSubmit }
	},
}
</script>

<style></style>
