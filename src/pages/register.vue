<template>
	<div>
		<ui-linear-loader v-if="registerState.pending" />
		<div class="flex flex-col items-center p-6 space-y-4">
			<span class="text-center text-xl font-bold">Register</span>
			<ui-alert v-if="registerState.error" color="red" icon="x-circle">
				{{ registerState.error }}
			</ui-alert>
			<form
				@submit.prevent="userRegister"
				class="flex flex-col space-y-4 w-full"
			>
				<ui-text-field
					id="email"
					type="email"
					label="Email"
					v-model="register.email"
				/>
				<ui-text-field
					id="password"
					type="password"
					label="Password"
					v-model="register.password"
				/>
				<ui-button
					primary
					type="submit"
					:disabled="!register.email || !register.password"
					:pending="registerState.pending"
				>
					Register
				</ui-button>
			</form>
			<small class="text-center">
				Do you already have an account?
				<nuxt-link class="text-primary-600" to="/login">
					Login
				</nuxt-link>
			</small>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useAuth from '~/composables/auth'

export default defineComponent({
	auth: false,
	layout: 'auth',
	setup() {
		const { register, userRegister, registerState } = useAuth()

		return { register, userRegister, registerState }
	},
})
</script>
