<template>
	<span class="font-semibold text-lg">
		{{ name }}
	</span>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	useContext,
	useFetch,
} from '@nuxtjs/composition-api'

export default defineComponent({
	props: ['id'],
	setup(props) {
		const { $supabase } = useContext()

		const name = ref('Anonymous user')

		const { fetch, fetchState } = useFetch(async () => {
			const { data } = await $supabase
				.from('profiles')
				.select('first_name, last_name')
				.eq('id', props.id)
			if (data) {
				const profile = data[0]
				name.value = `${profile.first_name} ${profile.last_name}`
			} else {
				name.value = 'Anonymous user'
			}
		})

		return { name }
	},
})
</script>
