<template>
	<div class="flex flex-col max-w-sm mx-auto space-y-4">
		<div
			class="p-6 border rounded-3xl"
			v-for="post in posts"
			:key="post.id"
		>
			<div class="flex items-center justify-between">
				<span class="font-bold text-lg">{{
					post.author.nickname
				}}</span>
				<ui-button
					v-if="
						!$store.state.auth.follows.some(
							(i) => i.followed === post.author.id
						)
					"
					@click="follow(post.author.id)"
					color="primary"
					size="sm"
					>Follow</ui-button
				>
				<ui-button
					color="primary"
					variant="text"
					size="sm"
					@click="unfollow(post.author.id)"
					v-else
				>
					Unfollow
				</ui-button>
			</div>
			{{ post.content }}
		</div>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	useContext,
	useFetch,
} from '@nuxtjs/composition-api'
import { Follow, Post } from '~/models'
import useUI from '~/composables/ui'

export default defineComponent({
	middleware: 'authenticated',
	setup() {
		const { $supabase, $supaAuth, store } = useContext()

		const { launchToast } = useUI()

		const posts = ref<Post[]>([])

		const follow = async (id: string) => {
			const { error } = await $supabase.from<Follow>('follows').insert({
				follower: $supaAuth.user()!.id,
				followed: id,
			})
			if (error) {
				launchToast({ text: error.message, color: 'danger' })
			} else {
				await store.dispatch('auth/fetchFollows')
			}
		}

		const unfollow = async (id: string) => {
			const { error } = await $supabase
				.from<Follow>('follows')
				.delete()
				.match({
					follower: $supaAuth.user()!.id,
					followed: id,
				})
			if (error) {
				launchToast({ text: error.message, color: 'danger' })
			} else {
				await store.dispatch('auth/fetchFollows')
			}
		}

		useFetch(async () => {
			const { data, error } = await $supabase
				.from<Post>('posts')
				.select('*, author (*)')
			if (error) {
				launchToast({ text: error.message, color: 'danger' })
			} else {
				posts.value = data!
			}
		})

		return { posts, follow, unfollow }
	},
})
</script>
