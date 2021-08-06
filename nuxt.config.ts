import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	build: {
		babel: {
			plugins: [
				[
					'@babel/plugin-proposal-private-property-in-object',
					{ loose: true },
				],
			],
		}, // https://github.com/nuxt/nuxt.js/issues/9224#issuecomment-893263501
	},
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			Ubuntu: [400, 500, 700],
		},
	},
	head: {
		script: [{ src: 'https://unpkg.com/phosphor-icons' }],
	},
	srcDir: 'src',
}

export default config
