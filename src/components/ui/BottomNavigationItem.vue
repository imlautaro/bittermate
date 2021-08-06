<template>
	<nuxt-link
		class="duration-100 active:bg-gray-900/10 flex flex-col items-center px-3 py-2 rounded-md text-gray-600 w-full"
		exact-active-class="!text-primary-600"
		:to="to"
	>
		<phosphor-icons :name="icon" />
		<span class="text-xs">{{ label }}</span>
	</nuxt-link>
</template>

<script>
export default {
	props: {
		to: {
			default: '/',
			type: String,
		},
		icon: {
			default: 'house',
			type: String,
		},
		label: {
			default: 'Home',
			type: String,
		},
	},
}
</script>
