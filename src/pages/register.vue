<template>
	<form @submit.prevent="register">
		<ui-text-field v-model="email" placeholder="Email" type="email" />
		<ui-text-field
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
			Register
		</ui-button>
		<small class="text-center">
			You already have an account?
			<nuxt-link class="text-primary-600" to="/login">
				Sign in
			</nuxt-link>
		</small>
	</form>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	useContext,
	useRouter,
} from '@nuxtjs/composition-api'
import useUI from '~/composables/ui'

export default defineComponent({
	layout: 'auth',
	setup() {
		const { $supaAuth } = useContext()

		const { launchToast } = useUI()

		const router = useRouter()

		const email = ref('')
		const password = ref('')
		const loading = ref(false)

		const register = async () => {
			loading.value = true
			const { error } = await $supaAuth.signUp({
				email: email.value,
				password: password.value,
			})

			if (error) {
				launchToast({ text: error.message, color: 'danger' })
			} else {
				router.push('/verification')
			}
			loading.value = false
		}

		return { email, password, register, loading }
	},
})
</script>
