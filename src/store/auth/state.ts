import { Profile } from '~/models'

const state = () => ({
	user: undefined,
	profile: undefined as Profile | undefined | null,
})

export type RootState = ReturnType<typeof state>

export default state
