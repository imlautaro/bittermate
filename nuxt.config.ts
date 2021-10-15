import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	auth: {
		redirect: {
			login: '/login',
			logout: '/login',
			home: '/',
		},
		strategies: {
			local: {
				endpoints: {
					login: {
						headers: {
							apikey: process.env.SUPABASE_KEY,
						},
						method: 'POST',
						params: {
							grant_type: 'password',
						},
						url: `${process.env.SUPABASE_URL}/auth/v1/token`,
					},
					logout: {
						headers: {
							apikey: process.env.SUPABASE_KEY,
						},
						method: 'POST',
						url: `${process.env.SUPABASE_URL}/auth/v1/logout`,
					},
					user: {
						headers: {
							apikey: process.env.SUPABASE_KEY,
						},
						url: `${process.env.SUPABASE_URL}/auth/v1/user`,
					},
					refresh: {
						method: 'POST',
						params: {
							grant_type: 'refresh_token',
						},
						url: `${process.env.SUPABASE_URL}/auth/v1/token`,
					},
				},
				user: {
					property: false,
				},
				refreshToken: {
					data: 'refresh_token',
					maxAge: 60 * 60 * 24 * 30,
					property: 'refresh_token',
				},
				scheme: 'refresh',
				token: {
					global: true,
					maxAge: 3600,
					property: 'access_token',
				},
			},
		},
	},
	axios: {
		baseURL: process.env.SUPABASE_URL,
		headers: {
			common: {
				apikey: process.env.SUPABASE_KEY as string,
			},
		},
	},
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
		'@nuxtjs/pwa',
	],
	components: true,
	css: ['~/assets/css/main.css'],
	googleFonts: {
		display: 'swap',
		families: {
			Ubuntu: [400, 500, 700],
		},
	},
	head: {
		script: [{ src: 'https://unpkg.com/phosphor-icons' }],
	},
	modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtclub/supabase'],
	pwa: {
		manifest: {
			name: 'Bittermate',
			short_name: 'Bittermate',
			theme_color: '#0284C7',
		},
	},
	router: {
		middleware: 'auth',
	},
	srcDir: 'src',
	ssr: false,
	supabase: {
		url: process.env.SUPABASE_URL || '',
		key: process.env.SUPABASE_KEY || '',
	},
	target: 'static',
}

export default config
