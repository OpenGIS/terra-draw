// Import Google Maps
import { Loader } from "@googlemaps/js-api-loader";

export function useTerraGoogle(id = "map") {
	// Get .env variables
	const config = useRuntimeConfig();
	const apiKey = config.public.GOOGLE_API_KEY;

	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		draw: null,
	});

	onMounted(() => {
		const loader = new Loader({
			apiKey,
			version: "weekly",
		});

		loader.load().then((google) => {
			// Create Map
			const map = new google.maps.Map(document.getElementById(id), {
				disableDefaultUI: true,
				center: { lat: lat.value, lng: lng.value },
				zoom: zoom.value + 1, // Bump up zoom to match others
				clickableIcons: false,
				mapId: id,
			});

			// Once Map loaded
			map.addListener("projection_changed", () => {
				// Create Terra Draw
				const { draw } = useTerraDraw(
					new TerraDrawGoogleMapsAdapter({
						lib: google.maps,
						map,
					}),
				);

				state.value.draw = ref(draw);
			});
		});
	});

	return {
		state,
	};
}
