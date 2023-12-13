// Import ArcGIS
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import Polygon from "@arcgis/core/geometry/Polygon";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Color from "@arcgis/core/Color";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import "@arcgis/core/assets/esri/themes/light/main.css";

export function useTerraEsri(id = "map") {
	const { lng, lat, zoom } = storeToRefs(useTerraStore());

	const state = ref({
		draw: null,
	});

	onMounted(() => {
		// Create Map
		const map = new Map({
			// Basemap layer service
			basemap: "osm",
		});

		const view = new MapView({
			map: map,
			center: [lng, lat],
			zoom: zoom,
			container: id,
		});

		// Create Terra Draw
		const { draw } = useTerraDraw(
			new TerraDrawArcGISMapsSDKAdapter({
				lib: {
					GraphicsLayer,
					Point,
					Polyline,
					Polygon,
					Graphic,
					SimpleLineSymbol,
					SimpleFillSymbol,
					SimpleMarkerSymbol,
					Color,
				},
				map: view,
			}),
		);

		state.value.draw = ref(draw);
	});

	return {
		state,
	};
}
