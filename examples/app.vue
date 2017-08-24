<template>
	<div>
		<vue-multi-date v-model="dates"></vue-multi-date>
	</div>
</template>
<script>
export default {
	name: 'app',
	data() {
		return {
			dates: []
		};
	}
};
</script>