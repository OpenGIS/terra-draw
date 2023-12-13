/**
 * Examples UI
 * -----------
 */
const examplesUI = function (draw) {
	// Adds Examples stylesheet to DOM

	const link = document.createElement("link");
	link.href = "./assets/examples.css";
	link.rel = "stylesheet";
	document.head.appendChild(link);

	// Mode Switcher
	// Adds a mode switcher to the map, if the draw object has more than one mode

	//If draw object has a _modes property
	if (draw._modes) {
		//Create a select element, with a class of mode-switcher
		const select = document.createElement("select");
		select.className = "mode-switcher";

		//Add a change event listener to the select element
		select.addEventListener("change", (e) => {
			//Set the draw mode to the value of the select element
			draw.setMode(e.target.value);
		});

		//For each mode in the draw object
		let counter = 0;
		Object.keys(draw._modes).forEach((mode) => {
			//Ignore the "static" and "arbitrary" modes
			if (mode === "static" || mode === "arbitrary") return;

			//Create an option element
			const option = document.createElement("option");
			//Set the value of the option element to the mode
			option.value = mode;
			//Set the text of the option element to the mode, converted to title case
			option.textContent = mode[0].toUpperCase() + mode.slice(1);

			//Append the option element to the select element
			select.appendChild(option);

			counter++;
		});

		//If there are less than 2 modes, don't show the mode switcher
		if (counter < 2) return;

		//Append the select element to the map
		document.body.appendChild(select);
	}
};
