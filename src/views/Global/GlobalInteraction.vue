<template>
<div class="pl-5 pt-3">
  <div v-for="(goal,index) in interaction" :key="index" class="row alignCenter mb-1 line" :class="'chart-'+(index+1)">
    <p>{{ goal.label }}</p>
    <div class="row alignCenter space chart ml-1" :style="'background-color:'+goal.color+';width:calc('+((goal.percentage * 80)/interaction[0].percentage)+'% + 50px) '">
      <img :src="require('@/assets/SDG-logos/'+goal.icon)" alt="">
    </div>
    <p class="percentage"  :style="'color:'+goal.color">
      <count-up :end-val="goal.percentage" :options="{suffix:'%',decimalPlaces:  Number.isInteger(goal.percentage) ? 0 : 2}" :duration="3" :delay="2"></count-up>
    </p>
  </div>
</div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import globalInfo from '../../../public/json/global.json'

const {interaction} = globalInfo
</script>

<style scoped lang="scss">
.chart{
  padding: 10px 1rem;
  border-radius: 50px;
  color: white;
  margin-right: 1rem;
}
.percentage{
  font-weight: bold;
}
img{
  width: 20px;
  height: 20px;
}
</style>