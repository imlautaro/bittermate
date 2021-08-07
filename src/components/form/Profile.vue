<template>
	<form
		class="flex flex-col space-y-4"
		@submit.prevent="profile ? update() : create()"
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<ui-text-field
				id="first-name"
				label="First name"
				v-model="first_name"
			/>
			<ui-text-field
				id="last-name"
				label="Last name"
				v-model="last_name"
			/>
		</div>
		<ui-button primary :pending="formState.pending" type="submit">
			{{ profile ? 'Update' : 'Create' }}
		</ui-button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useProfile from '~/composables/profile'

export default defineComponent({
	setup() {
		const {
			profile,
			fetch,
			fetchState,
			create,
			update,
			first_name,
			last_name,
			editMode,
			formState,
		} = useProfile()

		return {
			profile,
			fetch,
			fetchState,
			create,
			update,
			first_name,
			last_name,
			editMode,
			formState,
		}
	},
})
</script>
