import { MutationTree } from 'vuex'
import { RootState } from './state'

const mutations: MutationTree<RootState> = {
	SET_USER: (state, user) => (state.user = user),
	SET_PROFILE: (state, profile) => {
		state.profile = profile
	},
}

export default mutations
