//Import Leaflet
import * as lib from "leaflet";
import "leaflet/dist/leaflet.css";

export function useTerraLeaflet(id = "map") {
	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		features: [],
	});

	//Immediately...
	(() => {
		// Create Map
		const map = lib.map(id, {
			center: [lat.value, lng.value],
			// Bump up zoom to match others
			zoom: zoom.value + 1,
		});

		// OSM Tiles
		lib
			.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			})
			.addTo(map);

		// Create Terra Draw
		const { init, state: drawState } = useTerraDraw();

		// Create Adapter
		init(
			new TerraDrawLeafletAdapter({
				lib,
				map,
			}),
		);

		state.value = drawState.value;
	})();

	// Get features
	const features = computed(() => {
		return state.value?.features ?? [];
	});

	return {
		state,
		features,
	};
}
