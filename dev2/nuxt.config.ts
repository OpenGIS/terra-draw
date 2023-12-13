// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		rootId: "app",
	},

	ssr: false,

	devtools: {
		enabled: true,
	},

	runtimeConfig: {
		public: {
			MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
			GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
		},
	},

	css: [
		"~/assets/main.less",
		"leaflet/dist/leaflet.css",
		"maplibre-gl/dist/maplibre-gl.css",
	],

	imports: {
		dirs: ["stores"],
		presets: [
			// Load Terra Draw
			{
				from: "../../dist/terra-draw.modern.js",
				imports: [
					"TerraDraw",

					//Adapters
					"TerraDrawArcGISMapsSDKAdapter",
					"TerraDrawMapLibreGLAdapter",
					"TerraDrawOpenLayersAdapter",
					"TerraDrawMapboxGLAdapter",
					"TerraDrawLeafletAdapter",
					"TerraDrawGoogleMapsAdapter",

					//Modes
					"TerraDrawFreehandMode",
					"TerraDrawLineStringMode",
					"TerraDrawCircleMode",
					"TerraDrawGreatCircleMode",
					"TerraDrawPointMode",
					"TerraDrawPolygonMode",
					"TerraDrawRectangleMode",
					"TerraDrawSelectMode",
				],
			},
		],
	},

	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore"],
			},
		],
	],
});
