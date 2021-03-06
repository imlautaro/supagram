import { ActionTree } from 'vuex'
import { RootState } from './state'
import { Follow, Profile } from '~/models'

const actions: ActionTree<RootState, RootState> = {
	async fetchProfile({ commit }, user) {
		const { data } = await this.$supabase
			.from<Profile>('profiles')
			.select('*')
			.eq('id', user ? user.id : this.$supaAuth.user()?.id)
			.single()
		if (data) {
			commit('SET_PROFILE', data)
		} else {
			const { data: data2, error } = await this.$supabase
				.from<Profile>('profiles')
				.insert({
					id: this.$supaAuth.user()?.id,
					nickname: 'New User',
				})
			if (error) {
				commit('SET_PROFILE', null)
			} else {
				commit('SET_PROFILE', data2)
			}
		}
	},
	async fetchFollows({ commit }) {
		if (this.$supaAuth.user()) {
			const { data } = await this.$supabase
				.from<Follow>('follows')
				.select('*')
				.eq('follower', this.$supaAuth.user()!.id)
			if (data) {
				commit('SET_FOLLOWS', data)
			} else {
				commit('SET_FOLLOWS', [])
			}
		} else {
			commit('SET_FOLLOWS', [])
		}
	},
}

export default actions
