<template>
	<div>
		<ui-linear-loader v-if="loginState.pending" />
		<div class="flex flex-col items-center p-6 space-y-4">
			<span class="text-center text-xl font-bold">Login</span>
			<ui-alert v-if="loginState.error" color="red" icon="x-circle">
				{{ loginState.error }}
			</ui-alert>
			<form
				@submit.prevent="userLogin"
				class="flex flex-col space-y-4 w-full"
			>
				<ui-text-field
					id="email"
					type="email"
					label="Email"
					v-model="login.email"
				/>
				<ui-text-field
					id="password"
					type="password"
					label="Password"
					v-model="login.password"
				/>
				<ui-button
					primary
					:disabled="!login.email || !login.password"
					:pending="loginState.pending"
					type="submit"
				>
					Login
				</ui-button>
			</form>
			<small class="text-center">
				You don't have an account?
				<nuxt-link class="text-primary-600" to="/register">
					Register
				</nuxt-link>
			</small>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useAuth from '~/composables/auth'

export default defineComponent({
	layout: 'auth',
	setup() {
		const { login, userLogin, loginState } = useAuth()

		return { login, userLogin, loginState }
	},
})
</script>
