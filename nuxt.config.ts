import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
	],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
})
