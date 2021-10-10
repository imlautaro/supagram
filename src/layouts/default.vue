<template>
	<div>
		<nav>
			<div v-if="$store.state.auth.user">
				<nuxt-link to="/protected">Protected</nuxt-link>
				<button @click="$supaAuth.signOut()">Logout</button>
			</div>
			<div v-else>
				<nuxt-link to="/login">Login</nuxt-link>
				<nuxt-link to="/register">Register</nuxt-link>
			</div>
		</nav>
		<nuxt />
		<ui-toasts />
	</div>
</template>
