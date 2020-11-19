<template>
	<main class="calculed-height py-5">
		<div class="w-10/11 mx-auto pb-20">
			<div class="w-2/3 mx-auto">
				<h1 class="p-3 text-6xl text-blue-500">Mes livres</h1>
			</div>
			<div class="flex flex-wrap relative mx-auto w-2/3 pb-32">
				<CardLivre class="text-white rounded-lg p-6 w-1/3" v-for="(book, key) in books" :book="book" :key="key" />
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
