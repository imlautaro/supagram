<template>
	<div
		class="bg-primary-600/10 p-8 rounded-3xl space-y-2 text-primary-600 text-center"
	>
		<ph-envelope-simple class="mx-auto" height="48px" width="48px" />
		<span class="font-semibold text-xl">
			We send you a verification link!
		</span>
	</div>
</template>

<script>
import PhEnvelopeSimple from '~icons/ph/envelope-simple'

export default {
	layout: 'auth',
	components: {
		PhEnvelopeSimple,
	},
}
</script>
