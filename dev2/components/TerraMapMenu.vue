<script setup>
const terraStore = useTerraStore();

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	activeMode: {
		type: String,
		default: "select",
	},
	draw: {
		type: Object,
	},
});

const features = computed(() => {
	return props.draw ? props.draw.getSnapshot() : [];
});

const count = computed(() => {
	return {
		total: features.value.length,
		points: features.value.filter((f) => f.geometry.type === "Point").length,
		lines: features.value.filter((f) => f.geometry.type === "LineString")
			.length,
		polygons: features.value.filter((f) => f.geometry.type === "Polygon")
			.length,
	};
});
</script>

<template>
	<div class="map-menu">
		<div class="title">
			{{ title }} - {{ count.total }} Features
			<button v-if="count.total" @click="draw.clear()">Clear</button>
		</div>

		<div v-if="count.total">
			{{ count.points }} Points, {{ count.lines }} Lines,
			{{ count.polygons }} Polygons
		</div>

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
