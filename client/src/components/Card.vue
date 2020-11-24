<template>
	<div class="h-full overflow-hidden flex rounded-lg">
		<div class="w-1/2 h-full overflow-hidden flex rounded-lg">
			<img :src="`http://localhost:3333/api/uploads/poeme/${poeme.picture.filename}`" class="w-64 h-64 transition object-cover duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110" alt="Sunset in the mountains" />
		</div>
		<div class="w-1/2 flex-col justify-center self-center">
			<div class="flex flex-col justify-center">
				<h4 class="text-xl font-bold flex justify-center">{{ poeme.title }}</h4>
			</div>

			<div class="flex justify-center pt-32">
				<nuxt-link :to="'/poemes/' + poeme.id" class="bg-blue-600 text-white rounded-md hover:bg-blue-500 flex justify-center"><i class="py-2 px-2 icon-pencil"></i></nuxt-link>
			</div>
			<div class="flex justify-center w-full">
				<p class="text-center font-serif flex-wrap">Publié le {{ formatDate(poeme.created_at) }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
import { DateTime } from 'luxon'
export default {
	name: 'CardVue',
	props: ['poeme'],
	setup() {
		const { store } = useContext()
		useAsync(async () => {
			await store.dispatch('poemes/INDEX')
		})

		function formatDate(date) {
			return DateTime.fromJSDate(new Date(date)).toFormat('dd MM yyyy')
		}

		const poemes = computed(() => store.state.poemes.data)
		return { poemes, formatDate }
	},
}
</script>

<style lang="scss" scoped></style>
