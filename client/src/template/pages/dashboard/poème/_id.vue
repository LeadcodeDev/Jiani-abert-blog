<template>
	<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
			<div class="flex justify-between w-full">
				<h1 class="flex text-lg font-medium text-gray-900">Poèmes</h1>
				<button to="/dashboard/book/delete" class="flex rounded-lg cursor-pointer hover:bg-orange-600 transition duration-150 ease-in-out bg-orange-500 px-5 py-2 font-bold text-white">Sauvegarder</button>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	layout: 'dashboard',
}
</script>

<style></style>
