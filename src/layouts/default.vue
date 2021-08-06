<template>
	<div class="h-screen w-screen overflow-hidden flex flex-col">
		<layout-app-bar />
		<div class="h-full flex-1 overflow-y-auto">
			<nuxt />
		</div>
		<layout-bottom-navigation />
	</div>
</template>
