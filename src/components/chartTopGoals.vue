<template>
  <div>
    <h5 class="primaryColor pb-1">Top Synergetic Goals</h5>
    <div v-for="(goal,index) in topGoals" :key="index" class="row alignCenter mb-1 line" :class="'chart-'+(index+1)">
      <top-chart :goal="SDGs.find(x => x.id === goal.id)" class="chart"/>
      <p class="percentage"  :style="'color:'+SDGs.find(x => x.id === goal.id).color">
        <count-up :end-val="goal.percentage" :options="{suffix:'%'}" :duration="3"></count-up>
      </p>
    </div>
  </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
import CountUp from 'vue-countup-v3'
import SDGs from '../../public/json/SDG.json'
import TopChart from "@/components/topChart";
const props = defineProps({
  topGoals: Array
})
const {topGoals} = toRefs(props)
</script>

<style scoped lang="scss">
.chart{
  //padding: 5px 1rem;
  //border-radius: 50px;
  //color: white;
  //margin-right: 1rem;

  &-1 .chart{width:500px;}
  &-2 .chart{width:400px;}
  &-3 .chart{width:300px;}

  @media screen and (max-width: 500px){

    &-1 .chart{width:280px;}
    &-2 .chart{width:250px;}
    &-3 .chart{width:200px;}
  }
}
.percentage{
  font-weight: bold;
}
//img{
//  width: 20px;
//  height: 20px;
//  margin-left: 10px;
//}
</style>