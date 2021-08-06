<template>
	<div class="flex items-center justify-evenly text-primary-600">
		<button
			v-for="(star, index) in new Array(stars)"
			:key="index"
			@click="$emit('change', index + 1)"
		>
			<phosphor-icons :name="index >= value ? 'star' : 'star-fill'" />
		</button>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			default: 5,
			type: Number,
		},
		stars: {
			default: 5,
			type: Number,
		},
	},
	model: {
		prop: 'value',
		event: 'change',
	},
}
</script>
