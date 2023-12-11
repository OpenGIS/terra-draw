<script setup>
onMounted(() => {
	const { init, features } = useTerraLeaflet("leaflet-map");
});
</script>

<template>
	<div class="wrap">
		<terra-map-menu title="Leaflet" :features="features" />

		<div class="map" id="leaflet-map"></div>
	</div>
</template>

<style>
#leaflet-map {
	width: 100%;
	height: 100%;
}
</style>
