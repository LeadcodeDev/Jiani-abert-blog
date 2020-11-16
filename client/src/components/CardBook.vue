<template>
	<div class="relative">
		<div class="flex py-2 w-full w-32">
			<div class="rounded flex w-full">
				<img src="https://static.nationalgeographic.fr/files/styles/image_3200/public/stars_sedona_arizona.jpg" class="w-full hover:visible h-custom object-cover transition duration-500 ease-in-out transform" alt="Sunset in the mountains" />
			</div>
			<div class="overflow-hidden">
				<nuxt-link :to="'/books/' + book.id" class="bg-blue-600 text-white mx-1 px-5 py-1 rounded-md hover:bg-blue-500 invisible absolute calculed-center-in-book"><i class="icon-pencil"></i></nuxt-link>
			</div>
			<div class="flex calculed-center-in-book">
				<div class="text-center font-bold">
					<p class="text-5xl font-bold">Jiani-Abert</p>
					<div class="mx-auto text-justify pt-16">
						<p>{{ book.label }}</p>
					</div>
				</div>
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
	height: 30rem;
}

.calculed-center-in-book {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
