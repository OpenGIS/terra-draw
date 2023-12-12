export function useTerraDraw(adapter = null) {
	if (!adapter) {
		return;
	}

	const { getModes } = useTerraModes();
	const { activeMode, sharedFeatures } = storeToRefs(useTerraStore());

	const features = ref([]);

	// Create Terra Draw
	const draw = new TerraDraw({
		adapter,
		modes: getModes(),
	});

	const updateFeatures = () => {
		features.value = draw.getSnapshot();
	};

	// Start drawing
	draw.start();

	// Watch for Mode changes
	watch(activeMode, () => {
		draw.setMode(activeMode.value);
	});

	watchEffect(() => {
		// Watch for Feature changes
		if (sharedFeatures.value.length > 0) {
			console.debug("useTerraDraw: sharedFeatures");
			console.debug(sharedFeatures);

			//Add Features
			draw.addFeatures(sharedFeatures.value);

			updateFeatures();
		}
	});

	// // Watch for Feature changes
	// if (sharedFeatures.value.length > 0) {
	// 	console.debug("useTerraDraw: sharedFeatures");
	// 	console.debug(sharedFeatures);

	// 	//Add Features
	// 	draw.addFeatures(sharedFeatures.value);

	// 	updateFeatures();
	// }

	// Events
	draw.on("change", (ids, type) => {
		//Done editing
		//if (type === "delete" || type === "create") {
		// Get the Store snapshot
		updateFeatures();
		//}
	});

	draw.setMode(activeMode.value);

	return {
		draw,
		features,
	};
}
