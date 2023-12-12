<script setup>
onMounted(() => {
	const { features } = useTerraLeaflet("leaflet-map");

	console.debug(features.value);
});
</script>

<template>
	<terra-map-menu title="Leaflet" :features="features" />

	<div class="map" id="leaflet-map"></div>
</template>

<style>
#leaflet-map {
	width: 100%;
	height: 100%;
}
</style>
