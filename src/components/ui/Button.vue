<template>
	<div
		v-if="loading !== undefined && loading !== false"
		:class="buildClasses"
	>
		<ph-spinner-bold class="animate-spin" height="24px" width="24px" />
		<span v-if="icon === undefined">Loading</span>
	</div>
	<nuxt-link v-else-if="to !== undefined" :class="buildClasses" :to="to">
		<slot />
	</nuxt-link>
	<button v-else @click="$emit('click')" :class="buildClasses">
		<slot />
	</button>
</template>

<style lang="postcss">
.btn {
	@apply duration-100 flex font-semibold items-center justify-center space-x-2 w-min whitespace-nowrap;
	&:disabled {
		@apply bg-gray-200 dark:bg-gray-700 border-none shadow-none text-gray-400 dark:text-gray-500 !important;
	}
	&:focus-visible {
		@apply ring-4;
	}
}
.btn-block {
	@apply flex-1 w-full;
}
.btn-circular {
	@apply rounded-full !important;
}
.btn-solid {
	@apply shadow-md;
	&:active {
		@apply shadow !important;
	}
	&:hover {
		@apply shadow-lg;
	}
}
.btn-outlined {
	@apply border shadow-sm;
}
.btn-base {
	@apply px-5 py-3 rounded-2xl;
	&.btn-icon {
		@apply p-4;
	}
}
.btn-sm {
	@apply px-3 py-2 rounded-xl text-sm;
	&.btn-icon {
		@apply p-3 rounded-2xl;
	}
}
.btn-lg {
	@apply px-6 py-3 rounded-2xl text-lg;
	&.btn-icon {
		@apply p-5;
	}
}
.btn-default {
	&.btn-solid {
		@apply bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900;
		&:active {
			@apply bg-gray-900 dark:bg-gray-200 !important;
		}
		&:hover {
			@apply nt:bg-gray-700 dark:bg-white;
		}
	}
	&.btn-outlined {
		@apply border-gray-200 dark:border-gray-700;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-gray-900 dark:text-gray-100;
		&:active {
			@apply bg-gray-900/10 dark:bg-gray-100/10 !important;
		}
		&:hover {
			@apply nt:bg-gray-900/5 nt:dark:bg-gray-100/5;
		}
	}
	&:focus-visible {
		@apply ring-gray-800/25 dark:ring-gray-100/25;
	}
}
.btn-primary {
	&.btn-solid {
		@apply bg-primary-600 dark:bg-primary-400 text-white dark:text-gray-900;
		&:active {
			@apply bg-primary-700 dark:bg-primary-500 !important;
		}
		&:hover {
			@apply nt:bg-primary-500 nt:dark:bg-primary-300;
		}
	}
	&.btn-outlined {
		@apply border-primary-600 dark:border-primary-400;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-primary-600 dark:text-primary-400;
		&:active {
			@apply bg-primary-600/10 dark:bg-primary-400/10 !important;
		}
		&:hover {
			@apply nt:bg-primary-600/5 nt:dark:bg-primary-400/5;
		}
	}
	&:focus-visible {
		@apply ring-primary-600/25 dark:ring-primary-400/25;
	}
}
.btn-success {
	&.btn-solid {
		@apply bg-success-600 dark:bg-success-400 text-white dark:text-gray-900;
		&:active {
			@apply bg-success-700 dark:bg-success-500 !important;
		}
		&:hover {
			@apply nt:bg-success-500 nt:dark:bg-success-300;
		}
	}
	&.btn-outlined {
		@apply border-success-600 dark:border-success-400;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-success-600 dark:text-success-400;
		&:active {
			@apply bg-success-600/10 dark:bg-success-400/10 !important;
		}
		&:hover {
			@apply nt:bg-success-600/5 nt:dark:bg-success-400/5;
		}
	}
	&:focus-visible {
		@apply ring-success-600/25 dark:ring-success-400/25;
	}
}
.btn-warning {
	&.btn-solid {
		@apply bg-warning-600 dark:bg-warning-400 text-white dark:text-gray-900;
		&:active {
			@apply bg-warning-700 dark:bg-warning-500 !important;
		}
		&:hover {
			@apply nt:bg-warning-500 nt:dark:bg-warning-300;
		}
	}
	&.btn-outlined {
		@apply border-warning-600 dark:border-warning-400;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-warning-600 dark:text-warning-400;
		&:active {
			@apply bg-warning-600/10 dark:bg-warning-400/10 !important;
		}
		&:hover {
			@apply nt:bg-warning-600/5 nt:dark:bg-warning-400/5;
		}
	}
	&:focus-visible {
		@apply ring-warning-600/25 dark:ring-warning-400/25;
	}
}
.btn-info {
	&.btn-solid {
		@apply bg-info-600 dark:bg-info-400 text-white dark:text-gray-900;
		&:active {
			@apply bg-info-700 dark:bg-info-500 !important;
		}
		&:hover {
			@apply nt:bg-info-500 nt:dark:bg-info-300;
		}
	}
	&.btn-outlined {
		@apply border-info-600 dark:border-info-400;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-info-600 dark:text-info-400;
		&:active {
			@apply bg-info-600/10 dark:bg-info-400/10 !important;
		}
		&:hover {
			@apply nt:bg-info-600/5 nt:dark:bg-info-400/5;
		}
	}
	&:focus-visible {
		@apply ring-info-600/25 dark:ring-info-400/25;
	}
}
.btn-danger {
	&.btn-solid {
		@apply bg-danger-600 dark:bg-danger-400 text-white dark:text-gray-900;
		&:active {
			@apply bg-danger-700 dark:bg-danger-500 !important;
		}
		&:hover {
			@apply nt:bg-danger-500 nt:dark:bg-danger-300;
		}
	}
	&.btn-outlined {
		@apply border-danger-600 dark:border-danger-400;
	}
	&.btn-outlined,
	&.btn-text {
		@apply text-danger-600 dark:text-danger-400;
		&:active {
			@apply bg-danger-600/10 dark:bg-danger-400/10 !important;
		}
		&:hover {
			@apply nt:bg-danger-600/5 nt:dark:bg-danger-400/5;
		}
	}
	&:focus-visible {
		@apply ring-danger-600/25 dark:ring-danger-400/25;
	}
}
</style>

<script lang="ts">
import Vue from 'vue'
import PhSpinnerBold from '~icons/ph/spinner-bold'
export default Vue.extend({
	components: {
		PhSpinnerBold,
	},
	props: {
		color: {
			default: 'default',
			type: String,
		},
		variant: {
			default: 'solid',
			type: String,
		},
		size: {
			default: 'base',
			type: String,
		},
		block: {
			default: undefined,
			type: undefined,
		},
		loading: {
			default: undefined,
			type: Boolean,
		},
		to: {
			default: undefined,
			type: String,
		},
		icon: {
			default: undefined,
			type: undefined,
		},
		circular: {
			default: undefined,
			type: undefined,
		},
	},
	computed: {
		buildClasses() {
			const classes = ['btn']
			if (this.block !== undefined) {
				classes.push('btn-block')
			}
			if (this.circular !== undefined) {
				classes.push('btn-circular')
			}
			if (this.icon !== undefined) {
				classes.push('btn-icon')
			}
			switch (this.color) {
				case 'primary':
					classes.push('btn-primary')
					break
				case 'success':
					classes.push('btn-success')
					break
				case 'warning':
					classes.push('btn-warning')
					break
				case 'danger':
					classes.push('btn-danger')
					break
				case 'info':
					classes.push('btn-info')
					break
				default:
					classes.push('btn-default')
			}
			switch (this.variant) {
				case 'text':
					classes.push('btn-text')
					break
				case 'outlined':
					classes.push('btn-outlined')
					break
				default:
					classes.push('btn-solid')
			}
			switch (this.size) {
				case 'lg':
					classes.push('btn-lg')
					break
				case 'sm':
					classes.push('btn-sm')
					break
				default:
					classes.push('btn-base')
			}
			return classes.join(' ')
		},
	},
})
</script>
