import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'
import { Follow } from '~/models'

const useFollows = () => {
	const { $supabase, $supaAuth } = useContext()

	const { launchToast } = useUI()

	const follows = ref<Follow[]>([])

	useFetch(async () => {
		const { data, error } = await $supabase
			.from<Follow>('follows')
			.select('*')
			.eq('follower', $supaAuth.user()!.id)
		if (error) {
			launchToast({ text: error.message, color: 'danger' })
		} else {
			follows.value = data!
		}
	})

	return { follows }
}

export default useFollows
