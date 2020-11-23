<template>
	<main class="min-h-screen">
		<div class="flex justify-center w-full bg-teal-lighter my-32 min-h">
			<div class="w-1/2 flex justify-center bg-orange-300 rounded shadow-lg self-center t-5">
				<div class="flex w-4/12 flex-col">
					<div class="flex flex-wrap">
						<div class="relative w-full h-full">
							<img :src="`http://localhost:3333/api/uploads/book/${picture.filename}`" class="rounded-lg w-full h-custom object-cover" alt="" />
						</div>
					</div>
					<div class="text-justify flex-wrap pt-2 pb-2">
						{{ book.description }}
					</div>
				</div>
				<div class="w-8/12 flex justify-center">
					<div class="flex-col flex">
						<div class="flex-wrap h-custom flex justify-center">
							<div class="self-center text-2xl font-bold">
								<h1 class="pb-3">{{ book.label }}</h1>
								<hr />
							</div>
						</div>
						<div v-for="(part, key) in book.parts" class="flex" :key="key">
							<div class="self-center">
								<div class="text-2xl font-bold">
									<nuxt-link :to="'/parts/' + part.id" class="centered px-3 py-2 hover:bg-blue-700 transition duration-200 ease-in-out rounded-lg">
										{{ part.label }}
									</nuxt-link>
								</div>
								<div class="p-2">
									<ul>
										<li v-for="(chapter, key) in part.chapters" class="ml-5 p-2" :key="key">
											<nuxt-link :to="'/chapters/' + chapter.id" class="centered px-3 py-2 hover:bg-blue-700 transition duration-200 ease-in-out rounded-lg">
												{{ chapter.title }}
											</nuxt-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
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
		// évite de demander un affichage de dooné pas encore réçu
		const state = reactive({ loaded: false })

		// évite de demander un affichage de dooné pas encore réçu
		useAsync(async () => {
			await store.dispatch('books/INDEX')

			await store.dispatch('books/SHOW', params.value.id)

			// évite de demander un affichage de dooné pas encore réçu
			state.loaded = true
		})

		const picture = computed(() => store.state.books.item.picture)

		const book = computed(() => store.state.books.item)

		const description = computed(() => store.state.books.item.description)

		return { state, book, picture, description }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 48px);
}

.h-custom {
	height: 200px;
}
.min-h {
	min-height: 80%;
}

hr {
	border: none;
	border-top: 3px double #333;
	color: #333;
	overflow: visible;
	text-align: center;
	height: 5px;
}

hr:after {
	background: rgb(255, 199, 116);
	content: '§';
	padding: 0 4px;
	position: relative;
	top: -18px;
}
</style>
