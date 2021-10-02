<template>
	<div>
		<h1>Protected</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	middleware: 'authenticated',
})
</script>
