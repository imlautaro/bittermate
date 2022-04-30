import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/supabase',
		'nuxt-windicss',
		['unplugin-icons/nuxt', { scale: 1.5 }],
	],
	srcDir: 'src',
	typescript: {
		shim: false,
	},
})
