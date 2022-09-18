<template>
  <div class="row">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <regional-sidebar :region-title="regionTitle" :income="income" :region="region" :map="map"/>
    </div>
    <div class="xcol-body">
      <div v-html="data" class=" p-2-5 mt-1"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import RegionalSidebar from "@/views/Regional/regionalSidebar";
import {useGlobalStore} from "@/store/globalStore";
import {useMenuStore} from "@/store/menuStore";

const route = useRoute()
const region = ref('')
const income = ref('')
const data = ref(null)
const regionTitle = ref('')
const map = ref('regional-map-asia.png')
const store = useGlobalStore()
const menuStore = useMenuStore()
onMounted(() => {
  region.value = route.params.region
  income.value = route.params.income
  regionTitle.value = store.findLabel(region.value, income.value)
  data.value = store.findData('data', region.value, income.value)
})

</script>

<style scoped lang="scss">
</style>