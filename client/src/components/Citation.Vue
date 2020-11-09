<template>
	<div class="bg-black sticky bottom-0">
		<blockquote class="italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote text-justify">
			<p class="">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				specimen book
			</p>
			<div class="italic absolute w-64">
				<cite> Jiani Abert, Ecrivain amateur </cite>
			</div>
		</blockquote>
	</div>
</template>

<script>
export default {
	name: 'CitationVue',
}
</script>

<style>
blockquote {
	display: flex;
	position: relative;
	width: 60%;
	margin: 5rem auto;
	font-size: 1.5rem;
	line-height: 1.5rem;
	font-family: 'Times', serif;
	color: #1785b5;
}
blockquote::after {
	content: '\201d';
	right: 0;
	position: absolute;
	color: white;
	font-size: 6rem;
	padding-top: 10%;
	text-shadow: 0 0 10px black;
}
blockquote::before {
	position: relative;
	content: '\201d';
	font-size: 6rem;
	color: white;
	left: 0;
	text-shadow: 0 0 10px black;
}

blockquote cite {
	position: absolute;
	bottom: -150px;
	padding-left: 55px;
	font-size: 1rem;
	font-style: normal;
	line-height: 1.2;
	color: white;
	text-align: justify;
}
</style>
