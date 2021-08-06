<template>
	<i :class="buildClasses" />
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
	props: {
		display: {
			default: 'inline-flex',
			type: String,
		},
		name: {
			default: 'house',
			type: String,
		},
		size: {
			default: 'text-2xl',
			type: String,
		},
	},
	setup(props) {
		const buildClasses = computed(() => {
			const classes: string[] = []

			classes.push(props.display)
			classes.push(`ph-${props.name}`)
			classes.push(props.size)

			return classes.join(' ')
		})

		return { buildClasses }
	},
})
</script>
