<script setup>
const { state } = useTerraLeaflet("leaflet-map");
</script>

<template>
	<terra-map-menu
		v-show="typeof state.draw !== 'undefined'"
		title="Leaflet"
		:draw="state.draw"
	/>

	<div class="map" id="leaflet-map"></div>
</template>
