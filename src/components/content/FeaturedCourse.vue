<template>
	<ui-card>
		<div class="flex flex-col space-y-4 px-6 py-8">
			<div class="flex flex-col text-center">
				<span class="font-bold text-2xl">{{ course.title }}</span>
				<span class="text-gray-600"
					>{{ course.author }} -
					{{
						course.platform
							? course.platform.name
							: 'Unknown platform'
					}}</span
				>
			</div>
			<div class="flex justify-center flex-wrap">
				<div
					v-if="course.reviews.length"
					class="bg-primary-600/5 text-primary-600 flex items-center space-x-1 px-3 py-1 rounded-full text-sm mr-2 mb-2"
				>
					<phosphor-icons name="star-fill" size="text-base" />
					<span>{{ getAverageRating(course.reviews) }} rating</span>
				</div>
				<div
					v-if="course.reviews.length"
					class="bg-primary-600/5 text-primary-600 flex items-center space-x-1 px-3 py-1 rounded-full text-sm mr-2 mb-2"
				>
					<phosphor-icons name="users-fill" size="text-base" />
					<span>{{ course.reviews.length }} reviews</span>
				</div>
				<span
					v-for="(tag, index) in course.tags"
					:key="index"
					class="bg-gray-600/5 text-gray-600 px-3 py-1 rounded-full text-sm mr-2 mb-2"
				>
					{{ tag }}
				</span>
			</div>
			<a
				target="_blank"
				rel="nofollow"
				class="w-full btn btn--primary"
				:href="course.url"
			>
				<phosphor-icons name="play-circle-fill" />
				<span>Watch course</span>
			</a>
			<nuxt-link
				:to="`/courses/${course.id}`"
				class="btn btn--secondary w-full"
			>
				<phosphor-icons name="article" />
				<span>Ratings &amp; reviews</span>
			</nuxt-link>
		</div>
	</ui-card>
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
