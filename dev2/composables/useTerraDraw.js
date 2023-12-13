export function useTerraDraw(adapter = null) {
	if (!adapter) {
		return;
	}

	const { getModes } = useTerraModes();
	const { activeMode, sharedFeatures } = storeToRefs(useTerraStore());

	const state = ref({
		status: null,
	});

	// Create Terra Draw
	const draw = ref(
		new TerraDraw({
			adapter,
			modes: getModes(),
		}),
	);

	// Start drawing
	draw.value.start();
	draw.value.setMode(activeMode.value);

	// Watch for Mode changes
	watch(activeMode, () => {
		draw.value.setMode(activeMode.value);
	});

	// Once Features are loaded (async
	watchEffect(() => {
		if (!state.value.status && sharedFeatures.value.length) {
			draw.value.addFeatures(sharedFeatures.value);

			state.value.status = "populated";
		}
	});

	// Events
	// draw.value.on("change", (ids, type) => {});

	return {
		draw,
	};
}
