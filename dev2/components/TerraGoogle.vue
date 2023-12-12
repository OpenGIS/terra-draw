<script setup>
const { state } = useTerraGoogle("google-map");
</script>

<template>
	<terra-map-menu title="Google" :features="state.features" />

	<div class="map" id="google-map"></div>
</template>

<style>
#google-map {
	width: 100%;
	height: 100%;
}
</style>
