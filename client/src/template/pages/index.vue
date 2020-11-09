<template>
	<div>
		<div class="relative calculed">
			<Header />
		</div>
		<div class="relative">
			<Card />
		</div>
	</div>
</template>

<script>
import SquareVue from '@/components/SquareProfil.vue'
import CardVue from '@/components/Card.vue'

export default {
	layout: 'master',
	components: {
		Header: SquareVue,
		Card: CardVue,
	},
}
</script>

<style lang="scss">
.calculed {
	height: calc(100vh - 48px);
}
</style>
