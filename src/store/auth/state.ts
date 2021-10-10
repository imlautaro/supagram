import { Follow, Profile } from '~/models'

const state = () => ({
	user: undefined,
	profile: undefined as Profile | undefined | null,
	follows: undefined as Follow[] | undefined,
})

export type RootState = ReturnType<typeof state>

export default state
