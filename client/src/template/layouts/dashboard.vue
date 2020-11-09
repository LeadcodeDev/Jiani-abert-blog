<template>
	<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
	<div class="h-screen flex overflow-hidden bg-white">
		<div class="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
			<nuxt-link to="/" class="flex flex-shrink-0 px-6">
				<img class="h-8 w-auto bg-aqua absolute" src="@/public/images/home.png" alt="Workflow" />
			</nuxt-link>
			<div class="pt-10 h-0 flex-1 flex flex-col overflow-y-auto">
				<nav class="px-3 mt-6">
					<div class="space-y-1">
						<nuxt-link to="/dashboard" class="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-900 bg-gray-200 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150">
							<svg class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
							Home
						</nuxt-link>

						<nuxt-link
							to="/dashboard/poème"
							class="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
						>
							<!-- Heroicon name: view-list -->
							<svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
							</svg>
							poèmes
						</nuxt-link>
						<nuxt-link
							to="/dashboard/book"
							class="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
						>
							<!-- Heroicon name: view-list -->
							<svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
							</svg>
							livres
						</nuxt-link>
					</div>
				</nav>
			</div>
		</div>
		<div class="flex flex-col w-0 flex-1 overflow-hidden">
			<div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
				<button class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden" aria-label="Open sidebar">
					<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
						<path d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</button>
			</div>
			<nuxt />
		</div>
	</div>
</template>

<script>
export default {
	name: 'dashboard',
	//middleware: 'auth',
}
</script>

<style lang="scss" scoped></style>
