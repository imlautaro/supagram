<template>
	<div
		class="bg-gray-800 dark flex items-center p-2 pl-4 rounded-3xl space-x-4 text-gray-100 w-full"
	>
		<div class="flex flex-1 items-center space-x-2 w-full">
			<component
				:is="icon"
				:class="textColor"
				height="24px"
				width="24px"
			/>
			<span class="flex-1">{{ text }}</span>
		</div>
		<ui-button :color="color" variant="text" @click="$emit('dismiss')">
			Dismiss
		</ui-button>
	</div>
</template>

<script>
import PhXCircleBold from '~icons/ph/x-circle-bold'
import PhCheckCircleBold from '~icons/ph/check-circle-bold'
import PhInfoBold from '~icons/ph/info-bold'
import PhWarningBold from '~icons/ph/warning-bold'
export default {
	components: {
		PhXCircleBold,
		PhCheckCircleBold,
		PhInfoBold,
		PhWarningBold,
	},
	props: {
		text: String,
		color: {
			default: 'danger',
			type: String,
		},
	},
	data() {
		return {
			timeout: null,
		}
	},
	computed: {
		icon() {
			if (this.color === 'success') {
				return 'ph-check-circle-bold'
			}
			if (this.color === 'info') {
				return 'ph-info-bold'
			}
			if (this.color === 'warning') {
				return 'ph-warning-bold'
			}
			return 'ph-x-circle-bold'
		},
		textColor() {
			if (this.color === 'success') {
				return 'text-success-400'
			}
			if (this.color === 'info') {
				return 'text-info-400'
			}
			if (this.color === 'warning') {
				return 'text-warning-400'
			}
			return 'text-danger-400'
		},
	},
	mounted() {
		this.timeout = setTimeout(() => {
			this.$emit('dismiss')
		}, 5000)
	},
	beforeDestroy() {
		clearTimeout(this.timeout)
	},
}
</script>
