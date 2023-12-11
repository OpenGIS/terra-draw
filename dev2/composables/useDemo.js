export async function useDemoData() {
	const state = ref({
		status: null,
		features: null,
	});

	await fetch("/data/route-map.geojson")
		.then((res) => res.json())
		.then((data) => {
			//Iterate over each feature
			data.features.forEach((feature) => {
				// Add Terra Draw Modes
				switch (feature.geometry.type) {
					//Point
					case "Point":
						feature.properties.mode = "point";
						break;
					//LineString
					case "LineString":
						feature.properties.mode = "linestring";
						break;
					//Polygon
					case "Polygon":
						feature.properties.mode = "polygon";
						break;
				}
			});

			draw.value.addFeatures(data.features);

			state.value.status = "populated";
		})
		.catch((err) => {
			console.error(err);
		});

	return {
		state,
	};
}
