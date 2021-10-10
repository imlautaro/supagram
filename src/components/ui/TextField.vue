<template>
	<input
		class="bg-gray-100 px-5 py-3 rounded-2xl"
		@input="(event) => $emit('input', event.currentTarget.value)"
		:value="value"
	/>
</template>

<script>
export default {
	props: ['value'],
	model: {
		prop: 'value',
		event: 'input',
	},
}
</script>
