<template>
	<button
		class="btn"
		:class="{
			'btn--primary': primary != undefined,
			'btn--secondary': secondary != undefined,
		}"
		@click="handleClick"
	>
		<phosphor-icons
			v-if="pending != undefined && pending !== false"
			class="animate-spin"
			name="spinner"
		/>
		<slot v-else />
	</button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	props: ['primary', 'secondary', 'pending'],
	setup(props, { emit }) {
		const handleClick = () => {
			if (props.pending == undefined || props.pending === false) {
				emit('click')
			}
		}

		return { handleClick }
	},
})
</script>
