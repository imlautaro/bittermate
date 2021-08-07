import { reactive, useContext, useRouter } from '@nuxtjs/composition-api'
import { State } from '~/utils/state'

const useAuth = () => {
	const { $auth, $axios } = useContext()

	const login = reactive({
		email: '',
		password: '',
	})

	const loginState = reactive(new State())

	const router = useRouter()

	const userLogin = () => {
		loginState.reset()
		loginState.pending = true
		$auth
			.loginWith('local', { data: login })
			.then(() => {
				loginState.success = 'User logged in successfully!'
			})
			.catch(() => {
				loginState.error = 'An error occurred while trying to log in.'
			})
			.finally(() => {
				loginState.pending = false
			})
	}

	const register = reactive({
		email: '',
		password: '',
	})

	const registerState = reactive(new State())

	const userRegister = () => {
		registerState.reset()
		registerState.pending = true
		$axios
			.$post('/auth/v1/signup', register)
			.then(() => {
				registerState.success = 'Successfully registered user!'
				router.push('/login')
			})
			.catch(() => {
				registerState.error =
					'An error ocurred while trying to register.'
			})
			.finally(() => {
				registerState.pending = false
			})
	}

	return {
		login,
		loginState,
		userLogin,
		register,
		registerState,
		userRegister,
	}
}

export default useAuth
