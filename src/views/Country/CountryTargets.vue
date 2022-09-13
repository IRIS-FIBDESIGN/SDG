<template>
  <div class="row rm-padding">
    <div class="xcol-info">
      <country-sidebar class="p-sticky"/>
    </div>
    <div class="xcol-body">
      <div class="row p-3-5">
        <div v-for="(target,index) in targets" :key="index" class="xcol-2">
          <router-link :to="`/country/targets/${target.sdgId}`" class="w-100">
            <sankey-chart :data-props="target"/>
          </router-link>
        </div>
      </div>
    </div>
    <img class="countryBg" src="@/assets/country-bg.png" alt="world map">
  </div>
</template>

<script setup>
import SankeyChart from "@/views/Country/sankeyChart";
import countryInfo from '../../../public/json/country.json'
import CountrySidebar from "@/views/Country/countrySidebar";

const targets = countryInfo.targets.value
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