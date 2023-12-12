// Import MapBox GL
import * as lib from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export function useTerraMapbox(id = "map") {
	// Get .env variables
	const config = useRuntimeConfig();

	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		features: [],
	});

	onMounted(() => {
		// Create Map
		lib.accessToken = config.public.MAPBOX_ACCESS_TOKEN;
		const map = new lib.Map({
			container: id,
			style: {
				version: 8,
				sources: {
					"osm-tiles": {
						type: "raster",
						tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
						tileSize: 256,
						attribution:
							'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
					},
				},
				layers: [
					{
						id: "osm-tiles",
						type: "raster",
						source: "osm-tiles",
					},
				],
			},
			center: [lng.value, lat.value],
			zoom: zoom.value,
		});

		// On resize
		new ResizeObserver(() => {
			map.resize();
		}).observe(map.getContainer());

		// Create Terra Draw
		const { features } = useTerraDraw(
			new TerraDrawMapboxGLAdapter({
				lib,
				map,
			}),
		);

		state.value.features = ref(features);
	});

	return {
		state,
	};
}
