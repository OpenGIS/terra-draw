<script setup>
const { state, init } = useTerraLeaflet("leaflet-map");

onMounted(() => {
	init();
});
</script>

<template>
	{{ JSON.stringify(state.features) }}

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
