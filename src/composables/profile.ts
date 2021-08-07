import { ref, useFetch, useContext, reactive } from '@nuxtjs/composition-api'
import { Profile } from '~/models'
import { State } from '~/utils/state'

const useProfile = () => {
	const { $auth, $axios } = useContext()

	const user_id = $auth.user!.id as string

	const profile = ref<Profile>()

	const first_name = ref('')
	const last_name = ref('')
	const bio = ref('')
	const website = ref('')
	const username = ref('')
	const editMode = ref(false)

	// Fetch profile
	const { fetch, fetchState } = useFetch(async () => {
		try {
			const result = (await $axios.$get(
				`/rest/v1/profiles?id=eq.${user_id}&select=*`
			)) as Profile[]
			profile.value = result[0]
			if (profile.value.first_name) {
				first_name.value = profile.value.first_name
			}
			if (profile.value.last_name) {
				last_name.value = profile.value.last_name
			}
			if (profile.value.bio) {
				bio.value = profile.value.bio
			}
		} catch (error) {
			profile.value = undefined
		}
	})

	const formState = reactive(new State())

	// Create profile
	const create = () => {
		formState.reset()
		formState.pending = true
		$axios
			.$post('/rest/v1/profiles', {
				id: user_id,
				first_name: first_name.value,
				last_name: last_name.value,
				bio: bio.value,
				website: website.value,
				username: username.value,
			})
			.then(() => {
				formState.success = 'Profile created successfully!'
				fetch()
			})
			.catch((error) => {
				formState.error = error.message
			})
			.finally(() => {
				formState.pending = false
				editMode.value = false
			})
	}

	// Update profile
	const update = () => {
		formState.reset()
		formState.pending = true
		$axios
			.$patch(`/rest/v1/profiles?id=eq.${profile.value?.id}`, {
				first_name: first_name.value,
				last_name: last_name.value,
				bio: bio.value,
				website: website.value,
				username: username.value,
			})
			.then(() => {
				formState.success = 'Profile updated successfully!'
				fetch()
			})
			.catch((error) => {
				formState.error = error.message
			})
			.finally(() => {
				formState.pending = false
				editMode.value = false
			})
	}

	return {
		profile,
		fetch,
		fetchState,
		create,
		formState,
		update,
		first_name,
		last_name,
		bio,
		website,
		username,
		editMode,
	}
}

export default useProfile
