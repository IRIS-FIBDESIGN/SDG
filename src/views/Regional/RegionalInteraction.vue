<template>
  <div class="row">
    <div class="xcol-info">
      <regional-sidebar :region-title="regionTitle" :income="income" :region="region" :map="map"/>
    </div>
    <div class="xcol-body">
      <div class=" p-2-5 mt-1">
        <div v-for="(goal,index) in interaction" :key="index" class="row alignCenter mb-1 line"
             :class="'chart-'+(index+1)">
          <p>{{ goal.label }}</p>
          <interaction-chart :interaction="interaction[0].percentage" :goal="goal"/>
          <p class="percentage" :style="'color:'+goal.color">
            <count-up :end-val="goal.percentage"
                      :options="{suffix:'%',decimalPlaces:  Number.isInteger(goal.percentage) ? 0 : 2}"
                      :duration="3"
                      :delay="2"></count-up>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import InteractionChart from "@/views/Regional/interactionChart";
import {useGlobalStore} from "@/store/globalStore";
import RegionalSidebar from "@/views/Regional/regionalSidebar";

const route = useRoute()
const region = ref('null')
const income = ref('null')
const interaction = ref(null)
const regionTitle = ref('')
const map = ref('regional-map-asia.png')
const store = useGlobalStore()

onMounted(() => {
  region.value = route.params.region
  income.value = route.params.income
  regionTitle.value = store.findLabel(region.value, income.value)
  interaction.value = store.findData('interaction', region.value, income.value)
})

</script>

<style scoped lang="scss">
.chart {
  padding: 10px 1rem;
  border-radius: 50px;
  color: white;
  margin-right: 1rem;
}

.percentage {
  font-weight: bold;
}

img:not(.map) {
  width: 20px;
  height: 20px;
}
</style>