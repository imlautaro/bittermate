<template>
	<nav class="bg-primary-600 shadow py-4 text-white z-10" role="navigation">
		<div
			class="container flex items-center justify-center md:justify-between"
		>
			<nuxt-link class="font-bold text-2xl" to="/">
				Bittermate
			</nuxt-link>
			<div class="hidden md:flex items-center space-x-2">
				<nuxt-link
					class="px-4 py-2 rounded-md hover:bg-white/10"
					to="/"
				>
					Home
				</nuxt-link>
				<nuxt-link
					class="px-4 py-2 rounded-md hover:bg-white/10"
					to="/collections"
				>
					Collections
				</nuxt-link>
				<nuxt-link
					class="px-4 py-2 rounded-md hover:bg-white/10"
					to="/account"
				>
					My Account
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>
