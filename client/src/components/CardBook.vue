<template>
	<div class="relative">
		<div class="relative flex flex-wrap h-custom">
			<img src="https://static.nationalgeographic.fr/files/styles/image_3200/public/stars_sedona_arizona.jpg" class="rounded-lg w-full h-full object-cover" alt="" />
			<div class="absolute top-0 left-0 w-full h-full rounded-lg hover:hidden transition duration-100 ease-in-out">
				<div class="transition duration-200 ease-in-out rounded-lg font-medium">
					<div class="flex flex-col">
						<div class="centered text-4xl">
							Jiani-Abert
						</div>
						<div class="centered-title text-center text-4xl">
							{{ book.label }}
						</div>
					</div>
				</div>
			</div>
			<div class="absolute top-0 left-0 w-full h-full rounded-lg bg-blue-400 opacity-0 hover:opacity-100 transition duration-200 ease-in-out">
				<nuxt-link :to="'/books/' + book.id" class="centered px-3 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 ease-in-out rounded-lg">
					Lire plus
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CardBookVue',
	props: ['book'],
}
</script>

<style>
.h-custom {
	height: 35rem;
}

.centered {
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.centered-title {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
