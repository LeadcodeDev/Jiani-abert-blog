<template>
	<div class="sticky z-30 top-0 flex w-full px-5 py-2 text-white bg-black justify-center items-center space-x-48">
		<div class="flex pr-48">
			<nuxt-link to="/">JianiBlog</nuxt-link>
		</div>
		<div class="flex space-x-12 pl-40">
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton</nuxt-link>
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton</nuxt-link>
			<nuxt-link to="/" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Boutton </nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavbarVue',
}
</script>

<style>
.centered {
	position: absolute;
	left: 50%;
}
</style>
