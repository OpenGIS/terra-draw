<script setup>
const { init, features } = useTerraLeaflet();

onMounted(() => {
	init("leaflet-map");
});
</script>

<template>
	<div class="wrap">
		<terra-map-menu title="Leaflet" :features="features" />

		<div class="map" id="leaflet-map"></div>
	</div>
</template>

<style></style>
