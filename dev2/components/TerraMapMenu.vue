<script setup>
const terraStore = useTerraStore();

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	features: {
		default: [],
	},
	activeMode: {
		type: String,
		default: "select",
	},
});

const count = computed(() => {
	return {
		total: props.features.length,
		points: props.features.filter((f) => f.geometry.type === "Point").length,
		lines: props.features.filter((f) => f.geometry.type === "LineString")
			.length,
		polygons: props.features.filter((f) => f.geometry.type === "Polygon")
			.length,
	};
});
</script>

<template>
	<div class="map-menu">
		<div class="title">{{ title }} - {{ count.total }} Features</div>
		{{ count.points }} Points, {{ count.lines }} Lines,
		{{ count.polygons }} Polygons

		<textarea v-show="features.length" class="features" readonly>{{
			JSON.stringify(features)
		}}</textarea>
	</div>
</template>

<style lang="less">
.map-menu {
	position: absolute;
	top: 0;
	left: 0;
	width: 96%;
	padding: 2%;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.5);

	.title {
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		margin-bottom: 10px;
	}

	textarea {
		width: 100%;
		height: 100px;
		background-color: rgba(0, 0, 0, 0.5);
		border: none;
		resize: none;
		color: #fff;
		font-size: 8px;
		font-family: monospace;
	}
}
</style>
