<template>
	<div class="sticky justify-between text-center z-30 top-0 flex w-full px-5 py-2 text-white bg-blue-500 items-center">
		<div class="flex w-4/6 mx-auto">
			<div class="flex w-full justify-between">
				<div class="flex">
					<nuxt-link to="/" class="text-xl">JianiBlog</nuxt-link>
				</div>
				<div class="flex space-x-12">
					<nuxt-link to="/poemes" class="rounded-lg cursor-pointer hover:text-blue-600 px-3 py-1">Poème</nuxt-link>
					<nuxt-link to="/books" class="rounded-lg cursor-pointer hover:text-blue-600 px-3 py-1">Livre</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavbarVue',
}
</script>

<style lang="scss" scoped>
.centered {
	position: absolute;
	left: 50%;
}
</style>
