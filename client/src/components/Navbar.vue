<template>
	<div class="sticky z-50 top-0 flex justify-between w-full px-5 py-2 text-white bg-black">
		<div class="font-bold hover:text-blue-600">
			<nuxt-link to="/">JianiBlog</nuxt-link>
		</div>
		<div class="flex space-x-24 justify-between text-center centered">
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton</nuxt-link>
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton</nuxt-link>
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton </nuxt-link>
		</div>
		<div class="">
			<nuxt-link to="/" class="cursor-pointer hover:text-blue-600">Connexion</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavbarVue',
}
</script>

<style></style>
