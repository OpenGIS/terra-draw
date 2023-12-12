<script setup>
const { state } = useTerraMaplibre("maplibre-map");
</script>

<template>
	<terra-map-menu
		v-show="state.features.length"
		title="MapLibre"
		:features="state.features"
	/>

	<div class="map" id="maplibre-map"></div>
</template>

<style>
#maplibre-map {
	width: 100%;
	height: 100%;
}
</style>
