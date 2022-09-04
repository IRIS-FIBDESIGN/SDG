<template>
  <div>
    <canvas :style="{ width: '600px', height: '600px' }" ref="el"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';


const el = ref();
const phi = ref(3);


onMounted(() => {
  createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 600 * 2,
    height: 600 * 2,
    phi: 3,
    theta: 0,
    dark: 0.57,
    diffuse: 0,
    mapSamples: 21265,
    mapBrightness: 12,
    baseColor: [139/255, 163/255, 240/255],
    markerColor: [1, 1, 1],
    glowColor: [165/255, 165/255, 165/255],
    markers: [
      // longitude latitude
      // -27.706508, 136.173587
      { location: [-27.706508, 136.173587], size: 0.00000001 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.005;
    },
  });
});
</script>

<style scoped>

</style>