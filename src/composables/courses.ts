import {
	ref,
	useContext,
	reactive,
	useAsync,
	useRoute,
	useFetch,
} from '@nuxtjs/composition-api'
import { Course, CourseReview, Platform } from '~/models'
import { State } from '~/utils/state'

const searchResults = ref<Course[]>([])

const searchQuery = ref('')

const getAverageRating = (reviews: CourseReview[]) => {
	const average = reviews.reduce((ac, cv) => ac + cv.rate, 0) / reviews.length
	return Math.trunc(average * 10) / 10
}

const useCourses = () => {
	const { $supabase } = useContext()

	const searchState = reactive(new State())

	const search = async () => {
		searchState.reset()
		searchState.pending = true
		const { error, data } = await $supabase
			.from('courses')
			.select('*')
			.textSearch('title', `'${searchQuery.value}'`, {
				type: 'plain',
				config: 'english',
			})
		if (error) {
			searchState.error = error.message
			searchResults.value = []
		} else {
			const courses = data as Course[]
			searchResults.value = await Promise.all(
				courses.map(async (course) => {
					// Fetch course reviews
					const { data: reviews } = await $supabase
						.from('course_reviews')
						.select('*')
						.eq('course_id', course.id)

					course.reviews = reviews as CourseReview[]

					// Fetch course platform
					const { data: platforms } = await $supabase
						.from('platforms')
						.select('*')
						.eq('id', course.platform_id)

					if (platforms) {
						course.platform = platforms[0] as Platform
					}

					return course
				})
			)
			searchState.success = 'Search successful!'
		}
		searchState.pending = false
	}

	return { search, searchState, searchResults, searchQuery, getAverageRating }
}

export const useCourse = () => {
	const { $supabase, error, $auth, $axios } = useContext()
	const route = useRoute()
	const course = ref<Course>()

	const review = ref<CourseReview>()

	const reviewState = reactive(new State())

	const rate = ref(5)
	const title = ref('')
	const content = ref()

	const reviewFetch = async () => {
		const { data } = await $supabase
			.from('course_reviews')
			.select('*')
			.eq('profile_id', $auth.user!.id)
		if (data && course.value) {
			const x = data.filter(
				(item: CourseReview) => item.course_id == course.value!.id
			)
			if (x) {
				review.value = x[0] as CourseReview
				if (review.value) {
					if (review.value.rate) {
						rate.value = review.value.rate
					}
					if (review.value.title) {
						title.value = review.value.title
					}
					if (review.value.content) {
						content.value = review.value.content
					}
				}
			} else {
				review.value = undefined
			}
		} else {
			review.value = undefined
		}
	}

	const { fetch: courseFetch, fetchState: courseFetchState } = useFetch(
		async () => {
			const { data } = await $supabase
				.from('courses')
				.select('*')
				.eq('id', route.value.params.id)
			if (data) {
				const _course = data[0] as Course

				// Fetch course reviews
				const { data: reviews } = await $supabase
					.from('course_reviews')
					.select('*')
					.eq('course_id', _course.id)

				_course.reviews = reviews as CourseReview[]

				// Fetch course platform
				const { data: platforms } = await $supabase
					.from('platforms')
					.select('*')
					.eq('id', _course.platform_id)

				if (platforms) {
					_course.platform = platforms[0] as Platform
				}

				// Fetch user review
				reviewFetch()

				course.value = _course
			} else {
				throw error({ statusCode: 404, message: 'Page not found' })
			}
		}
	)

	const createReview = () => {
		reviewState.reset()
		reviewState.pending = true
		$axios
			.$post('/rest/v1/course_reviews', {
				rate: rate.value,
				title: title.value,
				content: content.value,
				course_id: course.value!.id,
				profile_id: $auth.user!.id,
			})
			.then(() => {
				reviewState.success = 'Profile created successfully!'
				reviewFetch()
			})
			.catch((error) => {
				reviewState.error = error.message
			})
			.finally(() => {
				reviewState.pending = false
			})
	}

	const updateReview = () => {
		$axios
			.$patch(`/rest/v1/course_reviews?id=eq.${review.value?.id}`, {
				rate: rate.value,
				title: title.value,
				content: content.value,
				course_id: course.value!.id,
				profile_id: $auth.user!.id,
			})
			.then(() => {
				reviewState.success = 'Profile created successfully!'
				reviewFetch()
			})
			.catch((error) => {
				reviewState.error = error.message
			})
			.finally(() => {
				reviewState.pending = false
			})
	}

	return {
		course,
		getAverageRating,
		courseFetch,
		courseFetchState,
		createReview,
		updateReview,
		rate,
		title,
		content,
		review,
		reviewFetch,
		reviewState,
	}
}

export default useCourses
