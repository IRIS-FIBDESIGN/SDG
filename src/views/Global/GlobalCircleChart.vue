<template>
  <div class="p-rel w-100 column-c">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
      <circle :cx="circle.cyx" :cy="circle.cyx" :r="circle.rr" stroke-linecap="round" class="bg"/>
      <circle :cx="circle.cyx" :cy="circle.cyx" :r="circle.rr" stroke-linecap="round" class="shade"/>
      <circle :cx="circle.cyx" :cy="circle.cyx" :r="circle.rr" stroke-linecap="round" class="circle"/>
    </svg>
    <count-up :end-val="percentage" :options="{suffix:'%',decimal: '.',decimalPlaces: Number.isInteger(percentage) ? 0 : 2,useEasing:true}" :duration="2" :delay="2" class="percentage"></count-up>
  </div>
</template>
<script setup>
import {defineProps, toRefs} from "vue";
import CountUp from 'vue-countup-v3'
import SDGs from '../../../public/json/SDG.json'

const props = defineProps({
  percentage: Number,
  color: Number,
  customColor: String
})
const {percentage,color,customColor} = toRefs(props);
let colorVal;
if(color.value){
  colorVal = SDGs.find(x => x.id === color.value).color;
}else{
  colorVal = customColor.value;
}
const percss = 450 - (450 * (percentage.value / 100))
const circle = {
  cyx: 80,
  rr: 70
}
</script>
<style scoped lang="scss">

svg {
  transform: rotate(-90deg) scale(0.8);
}
.bg{
  fill: white;
}
.shade,.circle{
  fill: none;
  stroke-width: 15px;
  stroke-dasharray: 450;
  stroke-dashoffset: 0;
}
.shade{
  stroke: #EFEFEF;
  filter: drop-shadow(0 0 1px #00000050);
}
.circle {
  fill: none;
  stroke: v-bind(colorVal);
  stroke-width: 15px;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  animation: anim forwards 2s;
}

@keyframes anim {
  100% {
    stroke-dashoffset: v-bind(percss);
  }
}

.percentage{
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  transform: translate(-50%,-50%);
  font-weight: bold;
  color: v-bind(colorVal);
}
</style>