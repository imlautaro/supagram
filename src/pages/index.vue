<template>
	<div class="flex flex-col max-w-sm mx-auto space-y-4">
		<form-create-post />
		<hello-world />
	</div>
</template>

<script>
export default {
	middleware: 'authenticated',
}
</script>
