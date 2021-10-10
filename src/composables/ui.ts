import { ref } from '@nuxtjs/composition-api'
import { v4 as uuid } from 'uuid'

export interface Toast {
	id?: string
	text: string
	color: 'danger' | 'success' | 'info' | 'warning'
}

const toasts = ref<Toast[]>([])

const useUI = () => {
	const launchToast = (toast: Toast) => {
		toast.id = uuid()
		toasts.value.push(toast)
	}

	const dismissToast = (id: string) => {
		toasts.value.splice(
			toasts.value.findIndex((toast) => toast.id === id),
			1
		)
	}

	return { toasts, launchToast, dismissToast }
}

export default useUI
