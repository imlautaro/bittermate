import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: colors.sky,
				gray: colors.blueGray,
				danger: colors.red,
				success: colors.green,
				warning: colors.amber,
			},
		},
	},
})

export default config
