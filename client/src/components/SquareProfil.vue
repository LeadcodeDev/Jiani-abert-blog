<template>
	<div class="block-centered w-4/6">
		<div class="flex text-center bg-white-500 profil px1 py-5">
			<div class="w-1/2 flex justify-center">
				<div class="w-48 h-48 self-center">
					<img src="http://jiani-abert.fr/uploads/profils/pp-jiani.jpg" alt="" class="object-cover rounded-lg w-full h-full" />
				</div>
			</div>
			<div class="w-2/3 flex justify-center">
				<div class="bg-white text-left text-justify px-5">
					<h2 class="text-2xl font-bold">Jiani-Abert</h2>
					<p class="w-2/3">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
						type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
						Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
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
.block-centered {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
