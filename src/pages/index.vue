<template>
	<div class="container flex flex-col space-y-4 max-w-screen-sm p-4">
		<ui-card>
			<ui-linear-loader v-if="searchState.pending" />
			<div
				class="flex flex-col items-stretch justify-center p-6 space-y-4 text-center"
			>
				<span class="text-2xl font-bold">
					What technologhy do you want to learn?
				</span>
				<ui-alert v-if="searchState.error" color="red" icon="x-circle">
					{{ searchState.error }}
				</ui-alert>
				<form
					@submit.prevent="search"
					class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4"
				>
					<ui-text-field
						id="search"
						class="w-full"
						label="Search"
						icon="magnifying-glass"
						v-model="searchQuery"
					/>
					<ui-button
						primary
						:disabled="!searchQuery"
						:pending="searchState.pending"
						>Search</ui-button
					>
				</form>
			</div>
		</ui-card>
		<content-featured-course
			v-if="searchResults.length"
			:course="searchResults[0]"
		/>
		<ui-card v-if="searchResults.length > 1">
			<div class="p-4">
				<span class="font-bold text-xl">More results</span>
			</div>
			<div v-for="(result, index) in searchResults" :key="result.id">
				<content-course v-if="index != 0" :course="result" />
			</div>
		</ui-card>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useCourses from '~/composables/courses'

export default defineComponent({
	setup() {
		const { search, searchState, searchResults, searchQuery } = useCourses()

		return { search, searchState, searchResults, searchQuery }
	},
})
</script>
