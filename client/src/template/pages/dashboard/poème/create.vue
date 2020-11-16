<template>
	<div class="">
		<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
				<div class="flex justify-between w-full">
					<h1 class="flex text-lg font-medium text-gray-900">Poème</h1>
					<button class="flex rounded-lg cursor-pointer hover:bg-orange-600 transition duration-150 ease-in-out bg-orange-500 px-5 py-2 font-bold text-white" @click.prevent="handleSubmit">Sauvegarder</button>
				</div>
			</div>
		</main>
		<div class="flex items-center justify-center w-full bg-teal-lighter calculedVerticale">
			<div class="w-1/2 bg-blue-300 rounded shadow-lg p-8">
				<h1 class="flex w-full text-center font-bold justify-center text-lg text-grey-darkest mb-6">Créer un poème</h1>
				<form class="mb-4" action="/" method="post">
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase tracking-wide text-center font-bold text-lg text-grey-darkest" for="first_name">Titre du poème</label>
						<input class="border py-2 px-3 text-grey-darkest2" type="text" v-model="state.title" id="first_name" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Contenu du poème</label>
						<textarea rows="5" class="border py-2 px-3 text-grey-darkest" type="email" v-model="state.content" id="email" />
					</div>
					<div class="flex flex-col mb-4 md:w-full text-center">
						<label for="book">Image du poème</label>
						<input type="file" name="book" class="" />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, useContext } from '@nuxtjs/composition-api'

export default {
	layout: 'dashboard',

	setup() {
		const { store } = useContext()
		const state = reactive({
			title: '',
			content: '',
		})

		async function handleSubmit() {
			await store.dispatch('poemes/STORE', state)
		}

		return { state, handleSubmit }
	},
}
</script>

<style>
.calculedVertical {
	height: calc(100vh - 70px);
}

.centered {
	top: 50%;
	left: 50%;
	transform: translate(-50% -50%);
	position: absolute;
}
</style>
