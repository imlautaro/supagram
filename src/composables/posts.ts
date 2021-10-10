import { ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { Post } from '~/models'

const posts = ref<Post[]>([])

const usePosts = () => {
	const { $supabase } = useContext()

	const { fetch, fetchState } = useFetch(async () => {
		const { data, error } = await $supabase
			.from<Post>('posts')
			.select('*, author (*)')
			.order('created_at', { ascending: false })
		if (data) {
			posts.value = data
		}
	})

	return { posts, fetch, fetchState }
}

export default usePosts
