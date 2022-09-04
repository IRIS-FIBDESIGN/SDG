<template>
  <div>
    <h5 class="primaryColor">{{ topGoals.title }}</h5>
    <div v-for="(goal,index) in topGoals.goals" :key="index" class="row alignCenter mb-1 line" :class="'chart-'+(index+1)">
      <div class="row alignCenter space chart" :style="'background-color:'+SDGs.find(x => x.id === goal.id).color">
        <p>{{ SDGs.find(x => x.id === goal.id).label }}</p>
        <img :src="require('@/assets/SDG-logos/'+SDGs.find(x => x.id === goal.id).icons.min)" alt="">
      </div>
      <p class="percentage"  :style="'color:'+SDGs.find(x => x.id === goal.id).color">
        <count-up :end-val="goal.percentage" :options="{suffix:'%'}" :duration="3" :delay="2"></count-up>
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps} from "vue";
import CountUp from 'vue-countup-v3'
import SDGs from '../../public/json/SDG.json'
defineProps({
  topGoals: {
    title: String,
    goals: {
      id: Number,
      percentage: String,
    }
  }
})
</script>

<style scoped lang="scss">
.chart{
  padding: 5px 1rem;
  border-radius: 50px;
  color: white;
  margin-right: 1rem;

  &-1 .chart{width:500px;}
  &-2 .chart{width:400px;}
  &-3 .chart{width:300px;}
}
.percentage{
  font-weight: bold;
}
img{
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
</style>