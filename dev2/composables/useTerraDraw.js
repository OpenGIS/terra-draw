export function useTerraDraw(adapter = null) {
	if (!adapter) {
		return;
	}
	const { getModes } = useTerraModes();
	const { activeMode, sharedFeatures } = storeToRefs(useTerraStore());

	const state = ref({ status: null, features: null });

	// Create Terra Draw
	const draw = new TerraDraw({
		adapter,
		modes: getModes(),
	});

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
		}
	});

	// Events
	draw.on("change", (ids, type) => {
		//Done editing
		// if (type === "delete") {
		// 	// Get the Store snapshot
		// 	state.value.features = draw.getSnapshot();
		// }
	});

	draw.setMode(activeMode.value);

	state.value.status = "init";

	// Get features
	const features = computed(() => {
		return draw.getSnapshot();
	});

	return {
		draw,
		state,
		features,
	};
}
