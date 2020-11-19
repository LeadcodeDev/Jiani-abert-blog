<template>
	<div>
		<!-- <img src="@/public/images/accueil.jpg" class="absolute object-cover h-home w-full bg-aqua absolute" alt="" /> -->
		<div class="absolute object-cover h-home w-full absolute"></div>

		<div class="relative calculedHead mx-auto md:text-center">
			<Header class="" />
		</div>
		<div class="relative mb-32 mx-auto flex flex-wrap width-perso">
			<Card class="text-center" v-for="(poeme, key) in poemes" :poeme="poeme" :key="key" />
		</div>

		<div class="relative justify-center">
			<div class="justify-center flex"></div>
			<div class="relative mx-auto py-10">
				<Citation />
			</div>
			<div class="justify-center flex"></div>
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
.h-home {
	height: 72vh;
}

.calculedHead {
	height: calc(70vh - 100px);
}

.width-perso {
	width: 1290px;
}

.width-hr {
	width: 66%;
}
</style>
