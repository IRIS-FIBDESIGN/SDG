<template>
  <transition name="fade-slide" mode="out-in" appear>
    <div class="p-sticky">
      <h6 class="primaryColor pl-2" v-html="regionTitle"></h6>
      <app-sidebar>
        <router-link :to="`/regional/all-goals/${region}/${income}`" class="w-100">
          <sidebar-item label="All Goals" icon="apps" rountT/>
        </router-link>
        <router-link :to="`/regional/interaction/${region}/${income}`" class="w-100">
          <sidebar-item label="Interaction" icon="bar-chart"/>
        </router-link>
        <router-link :to="`/regional/methodology/${region}/${income}`" class="w-100">
          <sidebar-item label="Methodology" icon="document-text"/>
        </router-link>
        <router-link :to="`/regional/data/${region}/${income}`" class="w-100">
          <sidebar-item label="Data" icon="analytics" borderless/>
        </router-link>
      </app-sidebar>
      <img class="map" :src="require('@/assets/'+map)" alt="">
    </div>
  </transition>
</template>

<script setup>

import AppSidebar from "@/components/appSidebar";
import SidebarItem from "@/components/sidebarItem";

const props = defineProps({
  regionTitle: String,
  region: String,
  income: String,
  map: String,
})
</script>

<style scoped lang="scss">

.map{
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.p-sticky{
  top: 70px;
  @media screen and (max-width: 500px) {
    padding-top: 2rem;
    *:not(h6){
      font-size: 2.2rem!important;
    }
  }
}

@media screen and (max-width: 500px){
  h6{
    color: white;
    text-align: center;
    padding: 0;
    margin: 0;
  }
}
</style>