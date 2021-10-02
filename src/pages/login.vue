<template>
	<div>
		<h1>Login</h1>
		<form @submit.prevent="login">
			<input v-model="email" placeholder="Email" type="email" />
			<input v-model="password" placeholder="Password" type="password" />
			<button type="submit">
				Login
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
	middleware: 'unauthenticated',
	setup() {
		const { $supaAuth } = useContext()

		const email = ref('')
		const password = ref('')

		const login = async () => {
			const { data, error } = await $supaAuth.signIn({
				email: email.value,
				password: password.value,
			})

			if (error) {
				console.error(error)
			} else {
				console.log(data)
			}
		}

		return { email, password, login }
	},
})
</script>
