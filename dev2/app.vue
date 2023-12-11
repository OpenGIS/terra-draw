<script setup>
const { getModes } = useTerraDraw();
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
    <div class="maps">
      <terra-leaflet v-if="isActive('leaflet')" />

      <terra-maplibre v-if="isActive('maplibre')" />

      <terra-openlayers v-if="isActive('openlayers')" />

      <terra-google v-if="isActive('google')" />

      <terra-mapbox v-if="isActive('mapbox')" />

      <!-- <terra-arcgis /> -->
    </div>
    <!-- END Maps  -->
  </div>
  <!-- END App -->
</template>

<style lang="less">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #f9f9f9;
  background-color: #333;

  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .nav {
      padding: 10px;
      height: 30px;
      display: flex;

      .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          margin-right: 5px;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #333;
          cursor: pointer;
          background-color: #333;
          color: #f9f9f9;

          &.mode-select {
            position: absolute;
            right: 10px;
            padding: 7px;
            font-weight: bold;

            select {
              margin-left: 5px;
            }
          }

          &.mode-select,
          &.active {
            background-color: #f9f9f9;
            color: #333;
          }
        }
      }
    }

    .maps {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: inherit;
      .map {
        width: 100%;
        height: inherit;
      }
    }
  }
}
</style>
