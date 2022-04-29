import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'nuxt-windicss',
	],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
})
