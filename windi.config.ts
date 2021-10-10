import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import native from 'windi-native'

const config = defineConfig({
	plugins: [native],
	theme: {
		extend: {
			colors: {
				danger: colors.red,
				success: colors.green,
				warning: colors.orange,
				info: colors.sky,
				gray: colors.blueGray,
				primary: colors.rose,
			},
			screens: {
				nt: { raw: '(hover: hover)' },
			},
		},
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
		},
	},
})

export default config
