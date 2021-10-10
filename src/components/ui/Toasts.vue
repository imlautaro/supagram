<template>
	<div
		class="fixed bottom-0 left-1/2 max-w-screen-sm p-4 transform -translate-x-1/2 w-full"
	>
		<transition-group
			class="flex flex-col relative space-y-4"
			name="toasts"
			tag="div"
		>
			<ui-toast
				v-for="toast in toasts"
				:key="toast.id"
				:text="toast.text"
				:color="toast.color"
				@dismiss="dismissToast(toast.id)"
			/>
		</transition-group>
	</div>
</template>

<style lang="postcss" scoped>
.toasts-enter-active {
	@apply duration-200 transform;
}
.toasts-leave-active {
	@apply absolute;
}
.toasts-move {
	@apply duration-200 transform;
}
.toasts-enter,
.toasts-leave-to {
	@apply opacity-0;
}
</style>

<script setup>
import useUI from '~/composables/ui'
const { toasts, dismissToast } = useUI()
</script>
