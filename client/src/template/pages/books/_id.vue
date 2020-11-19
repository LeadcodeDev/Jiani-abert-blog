<template>
	<main class="calculed-height">
		<div class="flex justify-center w-full bg-teal-lighter centered">
			<div class="w-1/4 bg-orange-300 rounded shadow-lg">
				<div class="w-3/4 mx-auto">
					<div class="flex flex-col mb-4 text-center text-3xl p-10">
						<p>Mon premier livre</p>
					</div>
					<div class="flex flex-col mb-4 text-left">
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
							make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, af ezf zf zf zf zf fefz fz zef zefz f z fzfzef centuries, but also the leap into electronic type centuries, but also the leap into electronic type centuries, but also the leap into
							electronic type centuries, but also the leap into electronic type cento electronic type zfzfzf zf zfz fzf ezfzer ger erg er egioejgier jgiergwith desktop publishing software like Aldus PageMaker including versions of Lorem
							Ipsum
						</p>
					</div>
				</div>

				<div class="flex-end flex justify-end pt-16 py-4 pr-2">
					<nuxt-link to="" class="rounded-lg bg-blue-500 cursor-pointer hover:text-white px-3 py-1 flex">Chapitre </nuxt-link>
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
	min-height: calc(100vh - 48px);
}

.centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
