<template>
	<div class="custom-block warning">
		<p>
			This feature requires access to <strong>{{ feature }}</strong> (server boost level {{ level }}).
		</p>
	</div>
</template>

<script>
export default {
	props: {
		feature: {
			type: String
		},
		level: {
			type: String
		}
	}
}
</script>

<style scoped>

</style>