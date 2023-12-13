<script setup>
const { state } = useTerraEsri("esri-map");
</script>

<template>
	<terra-map-menu
		v-show="typeof state.draw !== 'undefined'"
		title="ArcGIS"
		:draw="state.draw"
	/>

	<div class="map" id="esri-map"></div>
</template>
