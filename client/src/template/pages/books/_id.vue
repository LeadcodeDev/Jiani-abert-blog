<template>
	<main v-if="state.loaded" class="min-h-screen">
		<div class="flex justify-center w-full bg-teal-lighter my-16 min-h">
			<div class="bg-blue-500 relative w-1/2 flex-none shadow rounded-3xl">
				<div class="w-full relative flex-none -ml-full p-10 shadow-lg rounded-3xl transform shadow-lg bg-gradient-to-br from-blue-400 to-yellow-200 -rotate-3">
					<div class="w-full relative flex justify-center bg-opacity-50 rounded self-center transform rotate-3">
						<div class="flex w-6/12 flex-col">
							<div class="flex flex-wrap">
								<div class="relative w-full">
									<img :src="`http://localhost:3333/api/uploads/book/${picture.filename}`" class="rounded-lg w-full h-custom object-cover" alt="" />
								</div>
							</div>
							<div class="text-justify flex-wrap pt-2 pb-2">
								{{ book.description }}
							</div>

							<nuxt-link :to="slugify(['/books', book.label, book.id, book.parts[0].label, book.parts[0].chapters[0].title, book.parts[0].chapters[0].id])" class="mx-auto w-1/2 bg-white border shadow rounded-full text-center">
								Commencer la lecture
							</nuxt-link>
						</div>
						<div class="w-6/12 flex justify-center">
							<div class="flex-col flex">
								<div class="flex-wrap h-custom flex justify-center">
									<div class="self-center text-2xl font-bold">
										<h1 class="pb-3">{{ book.label }}</h1>
										<hr />
									</div>
								</div>
								<div v-for="(part, key) in book.parts" class="flex" :key="key">
									<div class="self-center pt-10">
										<div class="text-2xl font-bold">
											<div class="centered px-2 py-1 rounded-lg">
												{{ part.label }}
											</div>
										</div>
										<div class="p-2">
											<ul>
												<li v-for="(chapter, key) in part.chapters" class="ml-5 p-2" :key="key">
													<div class="centered px-2 py-1 rounded-lg">{{ chapter.title }}</div>
												</li>
											</ul>
										</div>
									</div>
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

		function slugify(array) {
			let ar = []
			array.forEach((element) => {
				const item = element.toString().toLowerCase()

				ar.push(item.replace(/ /g, '-'))
			})

			return ar.join('/')
		}

		const picture = computed(() => store.state.books.item.picture)

		const book = computed(() => store.state.books.item)

		const description = computed(() => store.state.books.item.description)

		return { state, book, picture, description, slugify }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 48px);
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
	content: '§';
	padding: 0 4px;
	position: relative;
	top: -18px;
}
</style>
