// Import MapLibre
import * as lib from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function useTerraMaplibre(id = "map") {
	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		draw: null,
	});

	onMounted(() => {
		// Create Map
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

		// Create Terra Draw
		const { draw } = useTerraDraw(
			new TerraDrawMapLibreGLAdapter({
				lib,
				map,
			}),
		);

		state.value.draw = ref(draw);
	});

	return {
		state,
	};
}
