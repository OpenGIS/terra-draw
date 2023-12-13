<script setup>
const { state } = useTerraMaplibre("maplibre-map");
</script>

<template>
	<terra-map-menu
		v-show="typeof state.draw !== 'undefined'"
		title="MapLibre"
		:draw="state.draw"
	/>

	<div class="map" id="maplibre-map"></div>
</template>
