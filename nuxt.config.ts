import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: ['@nuxt/typescript-build'],
	components: true,
	srcDir: 'src',
	target: 'static',
}

export default config
