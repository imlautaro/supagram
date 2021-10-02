import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'nuxt-windicss',
		'@nuxtclub/supabase',
		'unplugin-icons/nuxt',
	],
	components: true,
	plugins: ['~/plugins/supabase-auth'],
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
