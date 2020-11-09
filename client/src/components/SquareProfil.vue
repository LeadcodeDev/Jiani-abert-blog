<template>
	<div class="flex text-center centered bg-white-500 profil p-44 px1 py-5">
		<div class="w-1/2 flex justify-center">
			<img src="https://static.nationalgeographic.fr/files/styles/image_3200/public/stars_sedona_arizona.jpg" alt="" class="object-cover rounded-full w-custom h-custom" />
		</div>
		<div class="w-1/2">
			<div class="bg-white text-left text-justify rounded-lg px-5">
				<h2 class="text-2xl font-bold">Jiani-Abert</h2>
				<br />
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
					specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SquareProfil',
}
</script>

<style lang="scss" scoped>
.centered {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.profil {
	width: 50%;
}
.w-custom {
	width: 40vh;
}
.h-custom {
	height: 40vh;
}
</style>
