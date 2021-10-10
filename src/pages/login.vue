<template>
	<form @submit.prevent="login">
		<ui-text-field v-model="email" placeholder="Email" type="email" />
		<ui-text-field
			class="bg-gray-100 px-5 py-3 rounded-2xl"
			v-model="password"
			placeholder="Password"
			type="password"
		/>
		<ui-button
			:disabled="!email || !password"
			block
			color="primary"
			type="submit"
			:loading="loading"
		>
			Login
		</ui-button>
		<small class="text-center">
			You don't have an account?
			<nuxt-link class="text-primary-600" to="/register">
				Sign up
			</nuxt-link>
		</small>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'

export default defineComponent({
	layout: 'auth',
	setup() {
		const { $supaAuth } = useContext()

		const { launchToast } = useUI()

		const email = ref('')
		const password = ref('')
		const loading = ref(false)

		const login = async () => {
			loading.value = true
			const { error } = await $supaAuth.signIn({
				email: email.value,
				password: password.value,
			})

			if (error) {
				launchToast({ text: error.message, color: 'danger' })
			} else {
				launchToast({ text: 'Successful login', color: 'success' })
			}
			loading.value = false
		}

		return { email, password, login, loading }
	},
})
</script>
