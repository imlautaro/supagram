import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import native from 'windi-native'

const config = defineConfig({
	plugins: [native],
	theme: {
		extend: {
			colors: {
				gray: colors.blueGray,
				primary: colors.rose,
			},
		},
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
		},
	},
})

export default config
