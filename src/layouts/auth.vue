<template>
	<div class="container flex flex-col max-w-sm mx-auto px-4 py-16 space-y-8">
		<div class="flex items-center mx-auto space-x-2">
			<brand-isotype class="w-12" />
			<span class="font-bold text-3xl">Supagram</span>
		</div>
		<nuxt class="flex flex-col space-y-4" />
		<ui-toasts />
	</div>
</template>

<script>
export default {
	middleware: 'unauthenticated',
}
</script>
