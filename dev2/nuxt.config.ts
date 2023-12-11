// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	runtimeConfig: {
		public: {
			MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
			GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
		},
	},
	imports: {
		dirs: ["stores"],
		presets: [
			// Load Terra Draw
			// {
			// from: "../../src/terra-draw.ts",
			// imports: [
			// 	"TerraDraw",
			// 	//Adapters
			// 	"TerraDrawMapLibreGLAdapter",
			// 	"TerraDrawOpenLayersAdapter",
			// 	"TerraDrawMapboxGLAdapter",
			// 	"TerraDrawLeafletAdapter",
			// 	"TerraDrawGoogleMapsAdapter",
			// 	//Modes
			// 	"TerraDrawFreehandMode",
			// 	"TerraDrawLineStringMode",
			// 	"TerraDrawCircleMode",
			// 	"TerraDrawGreatCircleMode",
			// 	"TerraDrawPointMode",
			// 	"TerraDrawPolygonMode",
			// 	"TerraDrawRectangleMode",
			// 	"TerraDrawSelectMode",
			// 	],
			// },
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
