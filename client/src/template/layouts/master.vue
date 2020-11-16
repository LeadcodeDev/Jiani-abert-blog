<template>
	<div>
		<Navbar />

		<Nuxt />
		<div class="">
			<Footer />
		</div>
	</div>
</template>

<script>
import NavbarVue from '@/components/Navbar.vue'
import FooterVue from '@/components/Footer.vue'

export default {
	name: 'master',
	components: {
		Navbar: NavbarVue,
		Footer: FooterVue,
	},
}
</script>

<style lang="scss">
body {
	width: 100%;
	min-height: 100%;
}
</style>
