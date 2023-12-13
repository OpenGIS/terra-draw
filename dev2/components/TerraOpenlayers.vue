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

<style>
#openlayers-map {
	width: 100%;
	height: 100%;
}
</style>
