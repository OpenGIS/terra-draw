//Import Leaflet
import * as lib from "leaflet";
import "leaflet/dist/leaflet.css";

export function useTerraLeaflet(id = "map") {
	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		features: [],
	});

	onMounted(() => {
		// Create Map
		const map = lib.map(id, {
			center: [lat.value, lng.value],
			// Bump up zoom to match others
			zoom: zoom.value + 1,
			maxZoom: 24,
		});

		// Remove zoom
		map.removeControl(map.zoomControl);

		// Invalidate size on resize
		new ResizeObserver(() => {
			map.invalidateSize();
		}).observe(map.getContainer());

		// OSM Tiles
		lib
			.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			})
			.addTo(map);

		// Create Terra Draw
		const { features } = useTerraDraw(
			new TerraDrawLeafletAdapter({
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
