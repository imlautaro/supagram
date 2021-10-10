import { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ $supaAuth, app, redirect, store, ...context }) => {
	const mixin = {
		data() {
			return {
				subscription: null,
			}
		},
		mounted() {
			const { data } = $supaAuth.onAuthStateChange(async (event) => {
				// Set user in store
				store.commit('auth/SET_USER', $supaAuth.user())

				// Fetch user profile and follows
				if ($supaAuth.user()) {
					await store.dispatch('auth/fetchProfile')
					await store.dispatch('auth/fetchFollows')
				}

				// Redirect user
				if (event === 'SIGNED_IN') {
					redirect('/')
				} else {
					redirect('/login')
				}
			})
			// @ts-ignore
			this.subscription = data
		},
		beforeDestroy() {
			// @ts-ignore
			this.subscription?.unsubscribe()
		},
	}

	if (app.mixins) {
		app.mixins.push(mixin)
	} else {
		app.mixins = [mixin]
	}
}

export default plugin
