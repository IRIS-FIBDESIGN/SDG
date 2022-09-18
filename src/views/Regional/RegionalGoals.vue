<template>
  <div class="row">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <regional-sidebar :region-title="regionTitle" :income="income" :region="region" :map="map"/>
    </div>
    <div class="xcol-body">
      <div>
        <transition-group tag="div" name="fadeIn" class="row" appear>
          <div v-for="SDG in allGoals" :key="SDG.id" class="xcol-5-3-2 column-c">
            <global-circle-chart :percentage="SDG.percentage" :color="SDG.id"/>
            <div class="row-c ">
              <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.colored)" class="mr-1" alt="sdg"/>
              <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.labeled)" alt="sdg"/>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue";
import GlobalCircleChart from "@/views/Global/GlobalCircleChart";
import {useRoute} from "vue-router/dist/vue-router";
import SDGs from "../../../public/json/SDG.json";
import {useGlobalStore} from "@/store/globalStore";
import RegionalSidebar from "@/views/Regional/regionalSidebar";
import {useMenuStore} from "@/store/menuStore";

const route = useRoute()
const region = ref('')
const income = ref('')
const allGoals = ref(null)
const regionTitle = ref('')
const map = ref('regional-map-asia.png')
const store = useGlobalStore()
const menuStore = useMenuStore()
onMounted(() => {
  region.value = route.params.region
  income.value = route.params.income
  regionTitle.value = store.findLabel(region.value,income.value)
  allGoals.value = store.findData('allGoals',region.value,income.value)
  map.value = store.findMap(region.value)
})

</script>

<style scoped lang="scss">

</style>