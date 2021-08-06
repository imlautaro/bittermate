<template>
	<div class="bg-primary-200 flex h-1 overflow-hidden">
		<div class="animate-linear-loader bg-primary-400 h-full w-1/3"></div>
	</div>
</template>

<style lang="postcss" scoped>
.animate-linear-loader {
	animation: linear-loader 1s ease-in-out infinite;
}
@keyframes linear-loader {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(300%);
	}
}
</style>
