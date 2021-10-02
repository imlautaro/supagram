import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ $supaAuth, store }) => {
	if (store.state.auth.user === undefined) {
		store.commit('auth/SET_USER', $supaAuth.user())
	}
}

export default middleware
