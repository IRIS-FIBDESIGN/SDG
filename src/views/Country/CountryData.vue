<template>
  <div class="row rm-padding">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <country-sidebar class="p-sticky sidebarMobileMargin"/>
    </div>
    <div class="xcol-body">
      <div v-html="data" class="p-3-5"></div>
    </div>
  </div>
  <img class="countryBg" src="@/assets/country-bg.png" alt="world map">
</template>
<script setup>
import countryInfo from '../../../public/json/country.json'
import CountrySidebar from "@/views/Country/countrySidebar";
import {useMenuStore} from "@/store/menuStore";
const {data} = countryInfo
const menuStore = useMenuStore()
</script>

<style scoped lang="scss">
.countryBg{
  position: fixed;
  height: 80vh;
  top: 8rem;
  right: -3rem;
  z-index: -1;
}
.p-sticky{
  top: 100px;
}
</style>