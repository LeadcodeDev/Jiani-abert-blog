<template>
	<main class="calculed-height relative">
		<div class="w-4/5 mx-auto flex">
			<div class="centered flex">
				<div class="flex mx-auto w-1/2">
					<div class="flex w-full">
						<img src="https://static.nationalgeographic.fr/files/styles/image_3200/public/stars_sedona_arizona.jpg" class="left flex w-full rounded-l-lg object-cover" alt="Sunset in the mountains" />
					</div>
				</div>
				<div class="w-1/2 justify-center flex bg-yellow-600 mx-auto rounded-r-lg">
					<div class="flex justify-center flex-col font-bold text-3xl w-full pb-10">
						<div class="w-full">
							<h1 class="flex justify-center">
								Jiani Abert
							</h1>
							<div class="flex justify-center">
								<div class="flex border-t-2 border-gray-600 justify-center width-hr"></div>
							</div>

							<div class="justify-center flex">
								{{ poeme.title }}
							</div>
							<div class="flex flex-wrap mb-4 w-full mx-auto text-center">
								<div class="flex flex-col w-full text-left bg-blue-300 mx-auto">
									<p>Aujourd'hui il fait beau</p>
									<br />
									<p>Demain il va pleuvoir</p>
									<br />
									<p>Hier il y avait du vent</p>
									<br />
									<p>La semaine prochaine il y aura de l'orage</p>
									<br />
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

		useAsync(async () => {
			// récupère tout les livres et les met à disposition dans le state.books.data
			await store.dispatch('poemes/INDEX')
			// afficher un livre sur la page en fonction de son id
			await store.dispatch('poemes/SHOW', params.value.id)
		})

		const poeme = computed(() => store.state.poemes.item)

		return { poeme }
	},
}
</script>

<style>
.calculed-height {
	min-height: calc(100vh - 232px - 48px);
}
.centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
