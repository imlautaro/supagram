<template>
	<div class="flex flex-col h-screen overflow-hidden w-screen">
		<nav class="bg-white">
			<ui-container class="flex items-center justify-between py-4">
				<nuxt-link class="flex items-center space-x-2" to="/">
					<brand-isotype class="w-10" />
					<span class="font-bold text-2xl">Supagram</span>
				</nuxt-link>
				<!--
				<div class="hidden md:flex items-center">
					<ui-button variant="text" nav to="/">
						Home
					</ui-button>
					<ui-button variant="text" nav to="/explore">
						Explore
					</ui-button>
					<ui-button variant="text" nav to="/messages">
						Messages
					</ui-button>
				</div>
				-->
				<div class="flex items-center">
					<ui-button variant="text" size="sm" icon to="/account">
						<ph-user-bold height="24px" width="24px" />
					</ui-button>
				</div>
			</ui-container>
		</nav>
		<div class="flex-1 h-full overflow-y-auto">
			<ui-container>
				<nuxt />
			</ui-container>
		</div>
		<!--
		<div class="grid grid-cols-4 md:hidden bg-white shadow">
			<ui-button class="flex flex-col !space-x-0" block nav to="/">
				<ph-house-bold height="24px" width="24px" />
				<span class="text-sm">Home</span>
			</ui-button>
			<ui-button class="flex flex-col !space-x-0" block nav to="/explore">
				<ph-compass-bold height="24px" width="24px" />
				<span class="text-sm">Explore</span>
			</ui-button>
			<ui-button
				class="flex flex-col !space-x-0"
				block
				nav
				to="/messages"
			>
				<ph-chats-circle-bold height="24px" width="24px" />
				<span class="text-sm">Messages</span>
			</ui-button>
			<ui-button
				class="flex flex-col !space-x-0 !px-0"
				block
				nav
				to="/account"
			>
				<ph-user-bold height="24px" width="24px" />
				<span class="text-sm">Account</span>
			</ui-button>
		</div>
		-->
		<ui-toasts />
	</div>
</template>

<script setup>
import PhUserBold from '~icons/ph/user-bold'
import PhHouseBold from '~icons/ph/house-bold'
import PhCompassBold from '~icons/ph/compass-bold'
import PhChatsCircleBold from '~icons/ph/chats-circle-bold'
</script>
