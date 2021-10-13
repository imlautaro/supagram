import { ActionTree } from 'vuex'
import { RootState } from './state'
import { Profile } from '~/models'

const actions: ActionTree<RootState, RootState> = {
	async fetchProfile({ commit }, user) {
		const { data } = await this.$supabase
			.from<Profile>('profiles')
			.select('*')
			.eq('id', user ? user.id : this.$supaAuth.user()?.id)
		if (data) {
			commit('SET_PROFILE', data[0])
		} else {
			commit('SET_PROFILE', null)
		}
	},
}

export default actions
