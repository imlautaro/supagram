<template>
	<div class="flex flex-col max-w-sm mx-auto py-4 space-y-4">
		<form-update-profile />
		<ui-button
			block
			color="primary"
			@click="$supaAuth.signOut()"
			variant="outlined"
			>Sign out</ui-button
		>
	</div>
</template>
