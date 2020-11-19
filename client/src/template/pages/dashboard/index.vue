<template>
	<main class="">
		<div class="border-b border-gray-200 px-4 py-4">
			<div class="flex justify-around">
				<div class="flex flex-wrap">
					<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Mes poèmes</h1>
				</div>
				<div class="flex flex-wrap">
					<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Mes livres</h1>
				</div>
			</div>
		</div>
		<div class="flex">
			<div class="flex justify-start flex-wrap w-1/2">
				<div v-for="(poeme, key) in poemes" class="w-1/3 p-2" :key="key">
					<img :src="`http://localhost:3333/api/uploads/poeme/${poeme.picture.filename}`" class="w-full rounded-lg h-64 object-cover" alt="Sunset in the mountains" />
					<div class="py-4">
						<div class="mb-4 text-center">
							<p class="font-bold text-xl">{{ poeme.title }}</p>
							<div class="flex flex-row justify-center">
								<nuxt-link :to="'/dashboard/poème/' + poeme.id" class="bg-blue-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-blue-500"><i class="icon-pencil"></i></nuxt-link>
								<button @click.prevent="handleDeletePoeme(poeme.id)" class="bg-red-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-red-500"><i class="icon-trash"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-between flex-wrap w-1/2">
				<div v-for="(book, key) in books" class="rounded w-1/2 p-2" :key="key">
					<img :src="`http://localhost:3333/api/uploads/book/${book.picture.filename}`" class="w-full rounded-lg h-custom-book object-cover" alt="Sunset in the mountains" />
					<div class="text-center py-4">
						<div class="mb-2 flex justify-center">
							<p class="text-lg font-bold">{{ book.label }}</p>
						</div>
						<div class="flex flex-row justify-center">
							<nuxt-link :to="'/dashboard/book/' + book.id" class="bg-blue-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-blue-500"><i class="icon-pencil"></i></nuxt-link>
							<button @click.prevent="handleDeleteBook(book.id)" class="bg-red-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-red-500"><i class="icon-trash"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
import CardBookVue from '@/components/CardBook.vue'
import CardVue from '@/components/Card.vue'

CardVue

export default {
	layout: 'dashboard',

	setup() {
		const { store } = useContext()

		useAsync(async () => {
			await store.dispatch('poemes/INDEX')
			await store.dispatch('books/INDEX')
		})

		const poemes = computed(() => store.state.poemes.data)
		const books = computed(() => store.state.books.data)

		async function handleDeletePoeme(id) {
			await store.dispatch('poemes/DELETE', id)
		}

		async function handleDeleteBook(id) {
			await store.dispatch('books/DELETE', id)
		}

		return { poemes, handleDeletePoeme, handleDeleteBook, books }
	},
}
</script>
<style lang="scss">
.h-custom-book {
	height: 550px;
}
</style>
