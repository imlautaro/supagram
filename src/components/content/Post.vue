<template>
	<div
		class="border duration-100 text-left flex items-center p-6 rounded-3xl"
	>
		<button class="flex flex-1 flex-col space-y-2 w-full">
			<span class="font-semibold">{{ post.author.nickname }}</span>
			<p>{{ post.content }}</p>
		</button>
		<ui-button
			@click="toggleLike"
			v-if="like"
			color="primary"
			variant="text"
			size="sm"
			icon
		>
			<ph-heart-fill height="24px" width="24px" />
		</ui-button>
		<ui-button
			@click="toggleLike"
			v-else
			:loading="like === undefined"
			variant="text"
			size="sm"
			icon
		>
			{{ like }}
			<ph-heart-bold height="24px" width="24px" />
		</ui-button>
		<!--
		<ui-button
			v-if="post.author.id === $supaAuth.user().id"
			@click="deletePost(post.id)"
			icon
			size="sm"
			variant="text"
		>
			<ph-trash-bold height="24px" width="24px" />
		</ui-button>
		-->
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	useContext,
	useFetch,
} from '@nuxtjs/composition-api'
import { Like, Post } from '~/models'
import PhHeartBold from '~icons/ph/heart-bold'
import PhHeartFill from '~icons/ph/heart-fill'
import PhTrashBold from '~icons/ph/trash-bold'
import usePosts from '~/composables/posts'

export default defineComponent({
	components: {
		PhHeartBold,
		PhHeartFill,
		PhTrashBold,
	},
	props: ['post'],
	setup(props) {
		const { $supabase, $supaAuth } = useContext()

		const { fetch: fetchPosts } = usePosts()

		const like = ref<undefined | null | Like>(undefined)

		const { fetch: fetchLike, fetchState: fetchLikeState } = useFetch(
			async () => {
				const { data } = await $supabase
					.from<Like>('likes')
					.select('*')
					.match({
						post: props.post.id,
						author: $supaAuth.user()!.id,
					})

				if (data?.length) {
					like.value = data[0]
				} else {
					like.value = null
				}
			}
		)

		const toggleLike = async () => {
			if (like.value) {
				await $supabase
					.from<Like>('likes')
					.delete()
					.match({
						post: props.post.id,
						author: $supaAuth.user()!.id,
					})
			} else {
				await $supabase.from<Like>('likes').insert({
					post: props.post.id,
					author: $supaAuth.user()!.id,
				})
			}
			fetchLike()
		}

		const deletePost = async (id: number) => {
			await $supabase
				.from<Post>('posts')
				.delete()
				.match({
					id,
					author: $supaAuth.user()!.id,
				})
			fetchPosts()
		}

		return { like, toggleLike, deletePost }
	},
})
</script>
