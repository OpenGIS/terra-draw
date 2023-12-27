export function useTerraModes() {
	// All Modes
	const getModes = () => {
		return [
			new TerraDrawSelectMode({
				// Mode features
				flags: {
					// Point
					point: {
						feature: {
							draggable: true,
						},
					},

					// Polygon
					polygon: {
						feature: {
							draggable: true,
							rotateable: true,
							scaleable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Line
					linestring: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Freehand
					freehand: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Circle
					circle: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Rectangle
					rectangle: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},

					// Great Circle
					greatcircle: {
						feature: {
							draggable: true,
							coordinates: {
								midpoints: true,
								draggable: true,
								deletable: true,
							},
						},
					},
				},
				styles: {
					// Point
					selectedPointColor: "#008cff", // Hex color
					selectedPointWidth: 3, // Integer
					selectedPointOutlineColor: "#232323", // Hex color
					selectedPointOutlineWidth: 1, // Integer

					// LineString
					selectedLineStringColor: "#fd7047", // Hex color
					selectedLineStringWidth: 2, // Integer

					// Polygon
					selectedPolygonColor: "#fd7047", // Hex color
					selectedPolygonFillOpacity: 0.7, // 0 - 1
					selectedPolygonOutlineColor: "#232323", // Hex color
					selectedPolygonOutlineWidth: 1, // Integer

					// Selection Points
					// (of a polygon/linestring feature)
					selectionPointWidth: 3, // Integer
					selectionPointColor: "#fd7047", // Hex color
					selectionPointOutlineColor: "#232323", // Hex color
					selectionPointOutlineWidth: 1, // Integer

					// Mid Points
					//(of a polygon/linestring feature)
					midPointColor: "#008cff", // Hex color
					midPointOutlineColor: "#232323", // Hex color
					midPointWidth: 2, // Integer
					midPointOutlineWidth: 1, // Integer
				},
			}),

			new TerraDrawFreehandMode({
				styles: {
					fillColor: "#00d599",
					fillOpacity: 0.7,
					outlineColor: "#232323",
					outlineWidth: 1,
					closingPointColor: "#00d599",
					closingPointWidth: 2,
					closingPointOutlineColor: "#232323",
					closingPointOutlineWidth: 1,
				},
			}),

			new TerraDrawLineStringMode({
				styles: {
					lineStringColor: "#00b9a1",
					lineStringWidth: 2,
				},
			}),

			new TerraDrawCircleMode({
				styles: {
					fillColor: "#007f90",
					fillOpacity: 0.7,
					outlineColor: "#232323",
					outlineWidth: 1,
				},
			}),

			new TerraDrawGreatCircleMode({
				styles: {
					lineStringColor: "#007f90",
					lineStringWidth: 2,
					closingPointColor: "#007f90",
					closingPointWidth: 2,
					closingPointOutlineColor: "#232323",
					closingPointOutlineWidth: 1,
				},
			}),

			new TerraDrawPointMode({
				styles: {
					pointColor: "#fd7047",
					pointWidth: 3,
					pointOutlineColor: "#232323",
					pointOutlineWidth: 1,
				},
			}),

			new TerraDrawPolygonMode({
				styles: {
					fillColor: "#009c9e",
					fillOpacity: 0.7,
					outlineColor: "#232323",
					outlineWidth: 1,
				},
			}),

			new TerraDrawRectangleMode({
				styles: {
					fillColor: "#2f4858",
					fillOpacity: 0.7,
					outlineColor: "#232323",
					outlineWidth: 1,
				},
			}),

			// new TerraDrawRenderMode({
			// 	modeName: "render",
			// }),
		];
	};

	return {
		getModes,
	};
}
