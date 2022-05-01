import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import native from 'windi-native'

export default defineConfig({
	plugins: [native],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
			},
			screens: {
				nt: { raw: '(hover: hover)' },
			},
		},
		fontFamily: {
			sans: ['"Encode Sans"', 'sans-serif'],
		},
	},
})
