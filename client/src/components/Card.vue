<template>
	<div class="rounded overflow-hidden">
		<img src="https://static.nationalgeographic.fr/files/styles/image_3200/public/stars_sedona_arizona.jpg" class="w-full rounded-lg" alt="Sunset in the mountains" />
		<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2 text-center">{{ poeme.title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CardVue',
	props: ['poeme'],
}
</script>

<style></style>
