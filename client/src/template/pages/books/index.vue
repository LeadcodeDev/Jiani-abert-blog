<template>
	<main class="min-h-screen py-5">
		<div class="w-10/11 mx-auto pb-20">
			<div class="w-2/3 mx-auto">
				<h1 class="p-5 text-6xl text-blue-500">Mes Livres</h1>
			</div>
			<div class="flex flex-wrap relative mx-auto w-2/3 pb-32">
				<CardLivre v-for="(book, key) in books" class="text-white rounded-lg p-6 w-1/3" :book="book" :key="key" />
			</div>
		</div>
	</main>
</template>

<script>
import CardBookVue from '@/components/CardBook.vue'
import { computed, useAsync, useContext } from '@nuxtjs/composition-api'

export default {
	layout: 'master',

	setup() {
		const { store } = useContext()
		useAsync(async () => {
			await store.dispatch('books/INDEX')
		})

		const books = computed(() => store.state.books.data)
		return { books }
	},

	components: {
		CardLivre: CardBookVue,
	},
}
</script>

<style lang="scss"></style>
