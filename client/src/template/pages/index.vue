<template>
	<div>
		<div class="w-full h-full absolute">
			<img src="@/public/images/beautiful-sunset-in-the-mountains-landscape-with-sun-light-shining-through-orange-clouds-and-fog.jpg" alt="" class="object-cover w-full calculedHead" />
		</div>
		<div class="relative calculedHead mx-auto">
			<Header class="" />
			<div class="absolute bottom-0 w-full text-center">
				<div class="animate-bounce">
					<nuxt-link to="#poémes"><i class="icon-angle-down cursor-pointer text-white text-6xl"></i></nuxt-link>
				</div>
			</div>
		</div>
		<div id="poémes" class="mx-auto justify-center pt-20 pb-20 flex-wrap flex">
			<Card class="w-3/12 flex self-center border shadow-lg mx-3 my-3" v-for="(poeme, key) in [...poemes.slice(0, 9)]" :poeme="poeme" :key="key" />
		</div>

		<div class="relative justify-center">
			<div class="justify-center flex"></div>
			<div class="relative mx-auto py-10">
				<Citation />
			</div>
		</div>
	</div>
</template>

<script>
import SquareVue from '@/components/SquareProfil.vue'
import CardVue from '@/components/Card.vue'
import CitationVue from '@/components/Citation.vue'
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
		Header: SquareVue,
		Card: CardVue,
		Citation: CitationVue,
	},
}
</script>

<style lang="scss">
.calculedHead {
	height: calc(100vh - 48px);
}
</style>
