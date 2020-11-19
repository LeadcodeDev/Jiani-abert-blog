<template>
	<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
	<footer class="bg-blue-600">
		<div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
			<nav class="-mx-5 -my-2 flex flex-wrap justify-center">
				<div class="px-5 py-2">
					<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
						About
					</a>
				</div>
				<div class="px-5 py-2">
					<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
						Blog
					</a>
				</div>
				<div class="px-5 py-2">
					<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
						Jobs
					</a>
				</div>
				<div class="px-5 py-2">
					<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
						Press
					</a>
				</div>
				<div class="px-5 py-2">
					<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
						Accessibility
					</a>
				</div>
				<div class="px-5 py-2">
					<nuxt-link v-if="!$auth.loggedIn" to="/authentication/login" class="text-base leading-6 text-gray-500 hover:text-gray-900">Connexion </nuxt-link>
					<template v-else>
						<nuxt-link to="/dashboard" class="text-base leading-6 text-gray-500 hover:text-gray-900">Administration</nuxt-link>
						<button @click.prevent="() => $auth.logout()" class="px-5 focus:outline-none text-base leading-6 text-gray-500 hover:text-gray-900">Déconnexion</button>
					</template>
				</div>
			</nav>
		</div>
		<p class="text-center text-base leading-6 text-gray-400">
			&copy; 2020 Workflow, Inc. All rights reserved.
		</p>
	</footer>
</template>

<script>
export default {
	name: 'FooterVue',
}
</script>

<style lang="scss" scoped></style>
