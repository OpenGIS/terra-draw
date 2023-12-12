export function useDemo() {
	let features = ref([]);

	//Loads Features
	(async () => {
		await fetch("/data/stonehenge.geojson")
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

				features.value = data.features;
			})
			.catch((err) => {
				console.error(err);
			});
	})();

	return {
		features,
	};
}
