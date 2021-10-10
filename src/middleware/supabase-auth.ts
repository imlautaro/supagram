import { Middleware } from '@nuxt/types'

const middleware: Middleware = async ({ $supaAuth, store }) => {
	if (store.state.auth.user === undefined) {
		store.commit('auth/SET_USER', $supaAuth.user())
	}
	if (store.state.auth.profile === undefined) {
		await store.dispatch('auth/fetchProfile')
	}
	if (store.state.auth.follows === undefined) {
		await store.dispatch('auth/fetchFollows')
	}
}

export default middleware
