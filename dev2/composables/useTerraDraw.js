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
		console.debug("useTerraDraw: updateFeatures");
		console.debug(draw.getSnapshot());

		features.value = draw.getSnapshot();
	};

	// Start drawing
	draw.start();

	// Watch for Mode changes
	watch(activeMode, () => {
		draw.setMode(activeMode.value);
	});

	// Watch for Feature changes
	watch(sharedFeatures, () => {
		if (sharedFeatures.value.length > 0) {
			//Add Features
			draw.addFeatures(sharedFeatures.value);

			updateFeatures();
		}
	});

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
