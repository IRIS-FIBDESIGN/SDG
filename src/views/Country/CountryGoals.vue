<template>

  <div class="row rm-padding">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <country-sidebar class="p-sticky"/>
    </div>
    <div class="xcol-body">
      <transition-group tag="div" name="fadeIn" class="row" appear>
        <div v-for="SDG in allGoals" :key="SDG.id" class="xcol-6-3-2 column-c">
          <global-circle-chart :percentage="SDG.percentage" :color="SDG.id"/>

          <div class="row-c ">
            <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.colored)" class="mr-1"/>
            <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.labeled)"/>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
  <img class="countryBg" src="@/assets/country-bg.png" alt="world map">

</template>

<script setup>
import GlobalCircleChart from "@/views/Global/GlobalCircleChart";
import countryInfo from '../../../public/json/country.json'
import SDGs from "../../../public/json/SDG.json"
import CountrySidebar from "@/views/Country/countrySidebar";
import {useMenuStore} from "@/store/menuStore";

const {allGoals} = countryInfo
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
  top: 90px;
}
</style>