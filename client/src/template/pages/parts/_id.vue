<template>
	<main class="min-h-screen">
		<div class="flex justify-center w-full bg-teal-lighter my-32 min-h">
			<div class="w-1/2 flex justify-center bg-orange-300 rounded shadow-lg self-center t-5 flex-col">
				<div class="w-full f-full">
					<div class="text-2xl font-bold flex justify-center">
						<h2>{{ part.label }}</h2>
					</div>
				</div>
				<div class="w-full h-full flex text-center justify-center">
					<div class="w-1/2 text-justify flex justify-center p-5">
						<p class="flex">{{ part.description }}</p>
					</div>
				</div>
				<div class="flex justify-between p-5">
					<nuxt-link :to="'/parts/' + part.id" class="hidden sm:block lg:hidden xl:block mx-auto">
						<svg width="17" height="18">
							<path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
						</svg>
					</nuxt-link>
					<nuxt-link :to="'/parts/' + part.id" class="hidden sm:block lg:hidden xl:block mx-auto">
						<svg width="17" height="18" viewBox="0 0 17 18" fill="none">
							<path d="M17 0H15V18H17V0Z" fill="currentColor" />
							<path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
						</svg>
					</nuxt-link>
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
			await store.dispatch('parts/INDEX')

			await store.dispatch('parts/SHOW', params.value.id)

			// évite de demander un affichage de dooné pas encore réçu
			state.loaded = true
		})

		const label = computed(() => store.state.parts.item.label)

		const part = computed(() => store.state.parts.item)

		const description = computed(() => store.state.parts.item.description)

		return { state, part, description, label }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 48px);
}
</style>
