<template>
	<div class="relative">
		<div class="mx-auto w-1/3">
			<div class="justify-center pt-48 calculated-footer">
				<form class="bg-dark-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 shadow-lg border">
					<div class="mb-4">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Nom d'utilisateur </label>
						<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-model="state.email" />
					</div>
					<div class="mb-6">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Mot de passe </label>
						<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="state.password" />
					</div>
					<div class="flex items-center justify-between">
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click.prevent="handleSubmit()">Se connecter</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { useContext, reactive } from '@nuxtjs/composition-api'
export default {
	layout: 'master',

	setup() {
		const { $auth, $toast, redirect } = useContext()

		const state = reactive({
			email: '',
			password: '',
		})

		async function handleSubmit() {
			try {
				const { data } = await $auth.loginWith('local', { data: state })
				$toast.success(`Bienvenue ${data.user.firstname} ${data.user.lastname} ! 👋`)
				redirect(402, '/')
			} catch (error) {
				console.log(error)
				error.response.data.errors.forEach((error) => $toast.error(error.message))
			}
		}
		return { state, handleSubmit }
	},
}
</script>

<style>
.calculated-footer {
	height: calc(100vh - 192px);
}
</style>
