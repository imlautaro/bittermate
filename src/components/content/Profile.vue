<template>
	<div>
		<div v-if="fetchState.pending">Loading...</div>
		<div v-else-if="fetchState.error">Error.</div>
		<div class="flex flex-col space-y-4" v-else>
			<ui-alert
				class="bg-light-blue-600/10 text-light-blue-600"
				icon="info"
				v-if="!profile"
			>
				You need to create a profile
			</ui-alert>
			<ui-card>
				<ui-linear-loader v-if="formState.pending" />
				<div v-if="editMode" class="flex flex-col space-y-4 p-6">
					<form-profile />
					<ui-button secondary @click="editMode = false">
						Cancel
					</ui-button>
				</div>
				<div
					v-else-if="profile"
					class="flex items-center space-x-4 p-6"
				>
					<div class="flex flex-1 flex-col w-full">
						<span class="text-gray-600">Public profile</span>
						<span
							class="font-bold text-xl"
							v-if="profile.first_name"
						>
							{{ profile.first_name }} {{ profile.last_name }}
						</span>
						<span class="font-bold text-xl" v-else>
							Anonymous user
						</span>
						<p class="text-gray-600" v-if="profile.bio">
							{{ profile.bio }}
						</p>
					</div>
					<ui-button secondary @click="editMode = true">
						Edit
					</ui-button>
				</div>
				<div v-else class="p-6">
					<ui-button primary class="w-full" @click="editMode = true">
						Create profile
					</ui-button>
				</div>
			</ui-card>
		</div>
	</div>
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
