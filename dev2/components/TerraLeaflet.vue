<script setup>
const { state } = useTerraLeaflet("leaflet-map");
</script>

<template>
	<terra-map-menu
		v-show="state.features.length"
		title="Leaflet"
		:features="state.features"
	/>

	<div class="map" id="leaflet-map"></div>
</template>

<style>
#leaflet-map {
	width: 100%;
	height: 100%;
}
</style>
