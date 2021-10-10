import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'@nuxtclub/supabase',
		'unplugin-icons/nuxt',
		'@nuxtjs/pwa',
		'@nuxtjs/google-fonts',
	],
	components: true,
	css: ['~/assets/css/global.css'],
	googleFonts: {
		families: {
			Ubuntu: [400, 600, 700],
		},
	},
	plugins: ['~/plugins/supabase-auth'],
	pwa: {
		manifest: {
			name: 'Supagram',
			short_name: 'Supagram',
			lang: 'en',
		},
	},
	router: {
		middleware: 'supabase-auth',
	},
	srcDir: 'src',
	ssr: false,
	supabase: {
		key: process.env.SUPABASE_KEY || '',
		url: process.env.SUPABASE_URL || '',
	},
	target: 'static',
}

export default config
