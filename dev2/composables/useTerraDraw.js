export function useTerraDraw(adapter = null) {
	if (!adapter) {
		return;
	}
	const { getModes } = useTerraModes();
	const { activeMode, sharedFeatures } = storeToRefs(useTerraStore());

	let draw = ref(null);
	const state = ref({ status: null, features: null });

	// Create Terra Draw
	draw.value = new TerraDraw({
		adapter,
		modes: getModes(),
	});

	// Start drawing
	draw.value.start();

	// Watch for Mode changes
	watch(activeMode, () => {
		draw.value.setMode(activeMode.value);
	});

	// Watch for Feature changes
	watch(sharedFeatures, () => {
		if (sharedFeatures.value.length > 0) {
			//Add Features
			draw.value.addFeatures(sharedFeatures.value);
		}
	});

	// Events
	draw.value.on("change", (ids, type) => {
		//Done editing
		if (type === "delete") {
			// Get the Store snapshot
			state.value.features = draw.value.getSnapshot();
		}
	});

	draw.value.setMode(activeMode.value);

	state.value.status = "init";

	return {
		draw,
		state,
		getModes,
	};
}
