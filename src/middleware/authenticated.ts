import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ store, redirect }) => {
	if (!store.state.auth.user) {
		redirect('/login')
	}
}

export default middleware
