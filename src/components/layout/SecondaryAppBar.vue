<template>
	<nav
		class="bg-primary-600 shadow py-4 text-white z-10 dark"
		role="navigation"
	>
		<div class="container flex items-center justify-between">
			<div class="flex items-center space-x-4">
				<button class="icon-btn" @click="$router.push('/')">
					<phosphor-icons name="arrow-left" />
				</button>
				<nuxt-link class="font-bold text-2xl" to="/">
					Bittermate
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>
