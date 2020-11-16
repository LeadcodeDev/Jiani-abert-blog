<template>
	<main class="calculed-height py-5">
		<div class="w-10/11 mx-auto">
			<div class="relative mx-auto">
				<div class="w-2/3 mx-auto">
					<h1 class="p-5 text-6xl text-blue-500">Mes Poèmes</h1>
				</div>
				<div class="flex flex-wrap relative mx-auto w-2/3 text-center">
					<CardPoeme class="rounded-lg p-5 w-1/3" v-for="(poeme, key) in poemes" :poeme="poeme" :key="key" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CardPoemesVue from '@/components/CardPoemes.vue'
import { computed, useAsync, useContext } from '@nuxtjs/composition-api'

export default {
	layout: 'master',

	setup() {
		const { store } = useContext()
		useAsync(async () => {
			await store.dispatch('poemes/INDEX')
		})

		const poemes = computed(() => store.state.poemes.data)
		return { poemes }
	},

	components: {
		CardPoeme: CardPoemesVue,
	},
}
</script>

<style lang="scss">
.h-custom {
	height: 30rem;
}

.calculed-center-in-book {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
