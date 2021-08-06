<template>
	<nav class="bg-white flex md:hidden p-1 space-x-1 shadow" role="navigation">
		<ui-bottom-navigation-item
			v-for="(item, index) in items"
			:key="index"
			:icon="item.icon"
			:label="item.label"
			:to="item.to"
		/>
	</nav>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

interface BottomNavigationItem {
	icon: string
	label: string
	to: string
}

export default defineComponent({
	setup() {
		const items = ref<BottomNavigationItem[]>([
			{
				icon: 'house',
				label: 'Home',
				to: '/',
			},
		])

		return { items }
	},
})
</script>
