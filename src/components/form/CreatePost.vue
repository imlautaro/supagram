<template>
	<form
		@submit.prevent="publishPost"
		class="border p-6 rounded-3xl flex flex-col space-y-4"
	>
		<span class="font-semibold text-xl">Write a new post</span>
		<div class="flex flex-col space-y-2">
			<label class="text-sm" for="content">Content</label>
			<textarea
				class="px-5 py-3 rounded-2xl bg-gray-100"
				placeholder="Content"
				v-model="content"
			></textarea>
		</div>
		<ui-button :loading="loading" type="submit" color="primary" block>
			<ph-paper-plane-tilt-bold height="24px" width="24px" />
			<span>Publish</span>
		</ui-button>
	</form>
</template>

<script setup lang="ts">
import { ref, useContext } from '@nuxtjs/composition-api'
import { Post } from '~/models'
import useUI from '~/composables/ui'
import usePosts from '~/composables/posts'

import PhPaperPlaneTiltBold from '~icons/ph/paper-plane-tilt-bold'

const { $supabase, $supaAuth } = useContext()

const { launchToast } = useUI()

const { fetch: fetchPosts } = usePosts()

const content = ref('')

const loading = ref(false)

const publishPost = async () => {
	loading.value = true
	const { error } = await $supabase
		.from('posts')
		.insert({ content: content.value, author: $supaAuth.user()?.id })
	if (error) {
		launchToast({ text: error.message, color: 'danger' })
	} else {
		content.value = ''
		launchToast({ text: 'Post published successfully!', color: 'success' })
		fetchPosts()
	}
	loading.value = false
}
</script>
