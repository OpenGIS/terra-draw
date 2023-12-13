<script setup>
const { getModes } = useTerraModes();
const { changeMode } = useTerraStore();
const { activeMode } = storeToRefs(useTerraStore());

const state = reactive(
  new Map([
    [
      "activeMaps",
      new Set(["leaflet", "maplibre", "openlayers", "google", "mapbox"]),
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
  <!-- START Nav -->
  <div class="nav">
    <div class="nav-item terra-icon">
      <div>
        <img src="/img/icon.png" class="rounded" alt="Terra Draw" />
      </div>
    </div>

    <div class="nav-item map-toggle">
      <!-- Leaflet -->
      <div
        class="toggle-leaflet rounded"
        :class="{ active: isActive('leaflet') }"
        @click="toggleMap('leaflet')"
      >
        Leaflet
      </div>

      <!-- MapLibre -->
      <div
        class="toggle-maplibre rounded"
        :class="{ active: isActive('maplibre') }"
        @click="toggleMap('maplibre')"
      >
        MapLibre
      </div>

      <!-- OpenLayers -->
      <div
        class="toggle-openlayers rounded"
        :class="{ active: isActive('openlayers') }"
        @click="toggleMap('openlayers')"
      >
        OpenLayers
      </div>

      <!-- Google Maps -->
      <div
        class="toggle-google rounded"
        :class="{ active: isActive('google') }"
        @click="toggleMap('google')"
      >
        Google Maps
      </div>

      <!-- Mapbox -->
      <div
        class="toggle-mapbox rounded"
        :class="{ active: isActive('mapbox') }"
        @click="toggleMap('mapbox')"
      >
        Mapbox
      </div>
    </div>

    <div class="nav-item mode-select rounded">
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
  <!-- END Nav -->

  <!-- START Maps -->
  <div class="adapters">
    <div class="adapter" v-show="isActive('leaflet')">
      <terra-leaflet />
    </div>

    <div class="adapter" v-show="isActive('maplibre')">
      <terra-maplibre />
    </div>

    <div class="adapter" v-show="isActive('openlayers')">
      <terra-openlayers />
    </div>

    <div class="adapter" v-show="isActive('google')">
      <terra-google />
    </div>

    <div class="adapter" v-show="isActive('mapbox')">
      <terra-mapbox />
    </div>
    <!-- <terra-arcgis /> -->
  </div>
  <!-- END Maps  -->
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    height: 30px;
    display: flex;
    z-index: 1001;
    background-color: #333;

    .nav-item {
      display: flex;
      align-items: center;

      &.terra-icon {
        margin-right: 10px;

        img {
          width: 40px;
          height: 40px;
          border: 1px solid #999;
        }
      }

      &.map-toggle {
        div {
          margin-left: 5px;
          padding: 10px;
          color: #f9f9f9;
          cursor: pointer;
          &.active {
            background-color: #f9f9f9;
            color: #333;
          }
        }
      }

      &.mode-select {
        position: absolute;
        right: 20px;
        padding: 7px;
        font-weight: bold;
        background-color: #f9f9f9;
        color: #333;

        select {
          margin-left: 5px;
        }
      }
    }
  }

  .adapters {
    display: flex;
    flex-direction: row;
    width: inherit;
    height: inherit;
    border: 1px solid red;

    .adapter {
      flex: 1;
      position: relative;
      width: inherit;
      height: inherit;
      border-right: 1px solid #333;
      .map {
        width: inherit;
        height: inherit;
      }
    }
  }
}
</style>
