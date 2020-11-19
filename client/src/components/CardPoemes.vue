<template>
	<div class="w-1/3 p-2 relative align-center">
		<div class="w-full h-64 -bottom-16 overflow-hidden rounded-lg">
			<img :src="`http://localhost:3333/api/uploads/poeme/${poeme.picture.filename}`" class="w-full h-full transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110 object-cover" alt="Sunset in the mountains" />
		</div>
		<div class="py-2">
			<div class="flex px-1 mb-2 justify-between">
				<h4 class="text-xl font-bold">{{ poeme.title }}</h4>
				<nuxt-link :to="'/poemes/' + poeme.id" class="bg-blue-600 text-white mx-1 px-2 py-1 rounded-md hover:bg-blue-500"><i class="icon-pencil"></i></nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
export default {
	name: 'CardPoemesVue',
	props: ['poeme'],
	setup() {
		const { store } = useContext()
		useAsync(async () => {
			await store.dispatch('poemes/INDEX')
		})

		const poemes = computed(() => store.state.poemes.data)
		return { poemes }
	},
}
</script>

<style lang="scss" scoped></style>
