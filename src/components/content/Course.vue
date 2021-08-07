<template>
	<nuxt-link
		:to="`/courses/${course.id}`"
		class="duration-100 flex flex-col active:bg-gray-900/5 p-4 space-y-2 text-left w-full"
	>
		<div class="flex flex-col">
			<span class="font-medium text-lg">{{ course.title }}</span>
			<span class="text-gray-600 text-sm">
				{{ course.author }} -
				{{
					course.platform ? course.platform.name : 'Unknown platform'
				}}
			</span>
		</div>
		<div class="flex items-center space-x-2 text-gray-400">
			<div
				v-if="course.reviews.length"
				class="flex items-center space-x-1 text-xs"
			>
				<phosphor-icons name="star-fill" size="text-base" />
				<span>{{ getAverageRating(course.reviews) }}</span>
			</div>
			<div
				v-if="course.reviews.length"
				class="flex items-center space-x-1 text-xs"
			>
				<phosphor-icons name="users-fill" size="text-base" />
				<span>{{ course.reviews.length }}</span>
			</div>
			<div
				v-if="!course.free"
				class="flex text-warning-600 items-center space-x-1 text-xs"
			>
				<phosphor-icons
					name="currency-circle-dollar-fill"
					size="text-base"
				/>
				<span>Paid</span>
			</div>
		</div>
	</nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import useCourses from '~/composables/courses'

export default defineComponent({
	props: ['course'],
	setup() {
		const { getAverageRating } = useCourses()

		return { getAverageRating }
	},
})
</script>
