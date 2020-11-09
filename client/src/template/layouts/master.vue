<template>
	<div>
		<Navbar/>
		<Nuxt />
	</div>
</template>

<script>

import NavbarVue from '@/components/Navbar.vue'

export default {
	name: 'master',
	components: { Navbar: NavbarVue},
}
</script>

<style lang="scss">
body {
	width: 100%;
	min-height: 100%;
}


</style>
