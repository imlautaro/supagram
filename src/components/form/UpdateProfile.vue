<template>
	<form
		@submit.prevent="updateProfile"
		class="border flex flex-col p-6 rounded-3xl space-y-4 w-full"
	>
		<span class="font-semibold text-xl">Public profile</span>
		<div class="flex flex-col space-y-2">
			<label class="text-sm" for="nickname">Nickname</label>
			<ui-text-field
				id="nickname"
				placeholder="Nickname"
				v-model="nickname"
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="biography" class="text-sm">Bio</label>
			<textarea
				id="biography"
				class="px-5 py-3 rounded-2xl bg-gray-100"
				placeholder="Bio"
				v-model="biography"
			></textarea>
		</div>
		<ui-button color="primary" block>
			<ph-cloud-arrow-up-bold height="24px" width="24px" />
			<span>Save</span>
		</ui-button>
	</form>
</template>

<script setup>
import { onMounted, ref, useContext } from '@nuxtjs/composition-api'
import PhCloudArrowUpBold from '~icons/ph/cloud-arrow-up-bold'
import { Profile } from '~/models'
import useUI from '~/composables/ui'

const { $supabase, $supaAuth, store } = useContext()

const nickname = ref('')
const biography = ref('')

const { launchToast } = useUI()

onMounted(() => {
	if (store.state.auth.profile) {
		nickname.value = store.state.auth.profile.nickname
		biography.value = store.state.auth.profile.biography
	}
})

const updateProfile = async () => {
	const { error } = await $supabase.from('profiles').upsert({
		id: $supaAuth.user().id,
		nickname: nickname.value,
		biography: biography.value,
	})
	await store.dispatch('auth/fetchProfile')
	if (error) {
		launchToast({ text: error.message, color: 'danger' })
	} else {
		launchToast({ text: 'Profile updated successfully!', color: 'success' })
	}
}
</script>
