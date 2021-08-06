<template>
	<div
		class="flex items-center p-4 rounded-lg space-x-4 w-full"
		:class="`bg-${color}-600 bg-opacity-10 text-${color}-600`"
	>
		<phosphor-icons v-if="icon != undefined" :name="icon" />
		<p>
			<slot />
		</p>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			default: 'amber',
			type: String,
		},
		icon: {
			default: 'warning',
			type: String,
		},
	},
}
</script>
