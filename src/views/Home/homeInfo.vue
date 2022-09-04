<template>
<section class="row alignCenter p-rel">
  <img src="@/assets/home-info-wave.png" class="wave" alt="">
  <div class="xcol-2-2">
    <img src="@/assets/home-info-image.png" class="w-100" alt="SDG info"  data-aos="fade-right" data-aos-duration="1000">
  </div>
  <div class="xcol-2-2">
    <info-boxes/>
  </div>
</section>
</template>

<script setup>
import InfoBoxes from "@/views/Home/infoBoxes";
</script>

<style scoped lang="scss">
.wave{
  position: absolute;
  left: 0;
  width: 60%;
  z-index: -1;
}
</style>