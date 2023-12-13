<script setup>
const { state } = useTerraLeaflet("openlayers-map");
</script>

<template>
	<terra-map-menu
		v-show="typeof state.draw !== 'undefined'"
		title="Open Layers"
		:draw="state.draw"
	/>

	<div class="map" id="openlayers-map"></div>
</template>
