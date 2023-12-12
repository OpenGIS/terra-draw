<script setup>
const { getModes } = useTerraModes();
const { changeMode } = useTerraStore();
const { activeMode } = storeToRefs(useTerraStore());

const state = reactive(
  new Map([
    [
      "activeMaps",
      new Set([
        "leaflet",
        "maplibre",
        // "openlayers",
        "google",
        "mapbox",
      ]),
    ],
  ]),
);

const toggleMap = (map) => {
  if (state.get("activeMaps").has(map)) {
    state.get("activeMaps").delete(map);
  } else {
    state.get("activeMaps").add(map);
  }
};

const isActive = (map) => {
  return state.get("activeMaps").has(map);
};
</script>

<template>
  <!-- START App -->
  <div id="app">
    <!-- START Nav -->
    <div class="nav">
      <div class="nav-item">
        <div>
          <img src="/img/icon.png" alt="Terra Logo" height="30px" />
        </div>
      </div>

      <div class="nav-item map-toggle">
        <!-- Leaflet -->
        <div
          class="toggle-leaflet"
          :class="{ active: isActive('leaflet') }"
          @click="toggleMap('leaflet')"
        >
          Leaflet
        </div>

        <!-- MapLibre -->
        <div
          class="toggle-maplibre"
          :class="{ active: isActive('maplibre') }"
          @click="toggleMap('maplibre')"
        >
          MapLibre
        </div>

        <!-- OpenLayers -->
        <!--        <div
          class="toggle-openlayers"
          :class="{ active: isActive('openlayers') }"
          @click="toggleMap('openlayers')"
        >
          OpenLayers
        </div> -->

        <!-- Google Maps -->
        <div
          class="toggle-google"
          :class="{ active: isActive('google') }"
          @click="toggleMap('google')"
        >
          Google Maps
        </div>

        <!-- Mapbox -->
        <div
          class="toggle-mapbox"
          :class="{ active: isActive('mapbox') }"
          @click="toggleMap('mapbox')"
        >
          Mapbox
        </div>

        <div class="nav-item">
          <div class="mode-select">
            Mode
            <select @change="changeMode($event.target.value)">
              <option
                v-for="(mode, index) in getModes()"
                :key="index"
                :value="mode.mode"
                :selected="mode.mode === activeMode"
                :text="mode.mode.toUpperCase()"
              />
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- END Nav -->

    <!-- START Maps -->
    <div class="adapters">
      <div class="adapter">
        <terra-leaflet v-if="isActive('leaflet')" />
      </div>

      <div class="adapter">
        <!-- <terra-maplibre v-if="isActive('maplibre')" /> -->
      </div>

      <!-- <terra-openlayers v-if="isActive('openlayers')" /> -->

      <div class="adapter">
        <!-- <terra-google v-if="isActive('google')" /> -->
      </div>

      <div class="adapter">
        <!-- <terra-mapbox v-if="isActive('mapbox')" /> -->
      </div>
      <!-- <terra-arcgis /> -->
    </div>
    <!-- END Maps  -->
  </div>
  <!-- END App -->
</template>
