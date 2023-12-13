<script setup>
const { state } = useTerraGoogle("google-map");
</script>

<template>
	<terra-map-menu
		title="Google"
		:draw="state.draw"
		v-show="typeof state.draw !== 'undefined'"
	/>

	<div class="map" id="google-map"></div>
</template>
