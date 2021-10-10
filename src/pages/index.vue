<template>
	<div class="flex flex-col max-w-md mx-auto py-4 space-y-4">
		<form-create-post />
		<content-post v-for="post in posts" :post="post" :key="post.id" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import usePosts from '~/composables/posts'

export default defineComponent({
	middleware: 'authenticated',
	setup() {
		const { posts } = usePosts()

		return { posts }
	},
})
</script>
