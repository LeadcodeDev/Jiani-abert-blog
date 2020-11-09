<template>
	<div class="">
		<main class="flex relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
			<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 w-screen">
				<div class="flex justify-between w-full">
					<h1 class="flex text-lg font-medium text-gray-900">Poèmes</h1>
					<button to="/dashboard/poème/delete" class="flex rounded-lg cursor-pointer hover:bg-orange-600 transition duration-150 ease-in-out bg-orange-500 px-5 py-2 font-bold text-white">Sauvegarder</button>
				</div>
			</div>
		</main>
		<div class="flex items-center h-screen w-full bg-teal-lighter">
			<div class="w-full bg-white rounded shadow-lg p-8 md:max-w-sm md:mx-auto">
				<h1 class="flex w-full text-center font-bold text-lg text-grey-darkest mb-6">Créer un poème</h1>
				<form class="mb-4" action="/" method="post">
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" for="first_name">Titre du poème</label>
						<input class="border py-2 px-3 text-grey-darkest2" type="text" name="first_name" id="first_name" />
					</div>
					<div class="flex flex-col mb-4 md:w-full">
						<label class="mb-2 uppercase font-bold text-lg text-grey-darkest" for="email">Contenu du poème</label>
						<textarea class="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'dashboard',
}
</script>

<style></style>
