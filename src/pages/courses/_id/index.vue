<template>
	<div class="container max-w-screen-sm py-4">
		<div v-if="courseFetchState.pending">
			Loading...
		</div>
		<div v-else-if="courseFetchState.error">Error</div>
		<div v-else class="flex flex-col space-y-4">
			<ui-card>
				<div class="flex flex-col space-y-4 px-6 py-8">
					<div class="flex flex-col text-center">
						<span class="font-bold text-2xl">{{
							course.title
						}}</span>
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
							<span
								>{{
									getAverageRating(course.reviews)
								}}
								rating</span
							>
						</div>
						<div
							v-if="course.reviews.length"
							class="bg-primary-600/5 text-primary-600 flex items-center space-x-1 px-3 py-1 rounded-full text-sm mr-2 mb-2"
						>
							<phosphor-icons
								name="users-fill"
								size="text-base"
							/>
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
				</div>
			</ui-card>
			<ui-card v-if="profile" class="flex flex-col p-6 space-y-4">
				<div class="flex flex-col items-center text-center">
					<span class="font-bold text-xl">Rate this course</span>
					<span class="text-gray-600">
						Tell others what you think
					</span>
				</div>
				<ui-rating-selector v-model="rate" />
				<form
					@submit.prevent="review ? updateReview() : createReview()"
					class="flex flex-col space-y-4"
				>
					<ui-text-field
						id="title"
						v-model="title"
						label="Title (optional)"
					/>
					<ui-text-field
						v-model="content"
						id="review"
						label="Describe your experience (optional)"
					/>
					<ui-button
						primary
						type="submit"
						:pending="reviewState.pending"
						>{{ review ? 'Update' : 'Publish' }} review</ui-button
					>
				</form>
			</ui-card>
			<ui-card v-else>
				<ui-linear-loader v-if="formState.pending" />
				<div class="flex flex-col p-6 space-y-4">
					<div class="flex flex-col items-center text-center">
						<span class="font-bold text-xl"
							>Create a public profile to rate this course</span
						>
					</div>
					<form-profile />
				</div>
			</ui-card>
			<ui-card v-if="course.reviews.length">
				<div class="p-4">
					<span class="font-bold text-xl">Ratings &amp; reviews</span>
				</div>
				<div
					class="flex flex-col space-y-4 p-4"
					v-for="review in course.reviews"
					:key="review.id"
				>
					<div class="flex flex-col space-y-2">
						<ui-profile-name :id="review.profile_id" />
						<div class="flex space-x-1 text-primary-600">
							<phosphor-icons name="star-fill" size="text-base" />
							<phosphor-icons
								:name="review.rate >= 2 ? 'star-fill' : 'star'"
								size="text-base"
							/>
							<phosphor-icons
								:name="review.rate >= 3 ? 'star-fill' : 'star'"
								size="text-base"
							/>
							<phosphor-icons
								:name="review.rate >= 4 ? 'star-fill' : 'star'"
								size="text-base"
							/>
							<phosphor-icons
								:name="review.rate == 5 ? 'star-fill' : 'star'"
								size="text-base"
							/>
						</div>
					</div>
					<div class="flex flex-col text-gray-600 space-y-2">
						<span class="font-bold" v-if="review.title">{{
							review.title
						}}</span>
						<p v-if="review.content">{{ review.content }}</p>
					</div>
				</div>
			</ui-card>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useCourse } from '~/composables/courses'
import useProfile from '~/composables/profile'

export default defineComponent({
	layout: 'secondary',
	setup() {
		const {
			course,
			getAverageRating,
			courseFetchState,
			rate,
			title,
			content,
			createReview,
			updateReview,
			reviewFetch,
			reviewState,
			review,
		} = useCourse()

		const { profile, formState } = useProfile()

		return {
			course,
			getAverageRating,
			courseFetchState,
			profile,
			formState,
			rate,
			title,
			content,
			createReview,
			updateReview,
			reviewFetch,
			reviewState,
			review,
		}
	},
})
</script>
