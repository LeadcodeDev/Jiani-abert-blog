<template>
	<div>
		<div class="relative calculed">
			<Header class="profil rounded-lg" />
		</div>
		<div class="relative flex flex-wrap p-64">
			<Card v-for="(poeme, key) in poemes" :poeme="poeme" class="w-1/3 p-2" :key="key" />
		</div>
		<div class="relative flex">
			<Citation />
		</div>
		<div class="pt-10 justify-center text-center pb-10 bg-black">
			<nuxt-link to="/authentication/login" class="rounded-lg cursor-pointer hover:text-blue-600 bg-orange-500 px-3 py-1">Connexion </nuxt-link>
		</div>
	</div>
</template>

<script>
import SquareVue from '@/components/SquareProfil.vue'
import CardVue from '@/components/Card.vue'
import CitationVue from '@/components/Citation.vue'
import { computed, useContext } from '@nuxtjs/composition-api'

export default {
	layout: 'master',

	setup() {
		const { store } = useContext()
		store.dispatch('poemes/INDEX')
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
.calculed {
	height: calc(100vh - 48px);
}
.profil {
	background-color: white;
}
</style>
