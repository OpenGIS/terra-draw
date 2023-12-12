<script setup>
const { state } = useTerraMapbox("mapbox-map");
</script>

<template>
	<terra-map-menu
		v-show="state.features.length"
		title="Mapbox"
		:features="state.features"
	/>

	<div class="map" id="mapbox-map"></div>
</template>

<style>
#mapbox-map {
	width: 100%;
	height: 100%;
}
</style>
