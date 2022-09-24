<template>
  <div class="row alignCenter space chart ml-1"
       :style="'width:calc('+((percentage * 80)/interaction)+'% + 50px) '">
    <img :src="require('@/assets/SDG-logos/'+icon)" alt="">
  </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
const props = defineProps({
  goal: Object,
  interaction: Number
})

const {goal, interaction} = toRefs(props)
const {color, icon, percentage} = goal.value

</script>

<style scoped lang="scss">
.chart{
  padding: 10px 1rem;
  border-radius: 50px;
  color: white;
  margin-right: 1rem;
  background-color: #ffffff50;
  position: relative;
  overflow: hidden;
  z-index: -1;
  &:before{
    position: absolute;
    content: '';
    background-color: v-bind(color);
    inset-block: 0;
    inset-inline-start: 0;
    inset-inline-end: 100%;
    z-index: -1;
    animation: fillChart 3s forwards ease-in-out;
    border-radius: 0 50px 50px 0;
  }
}

@keyframes fillChart {
  from{
    inset-inline-end: 100%;
  }
  to{
    inset-inline-end: 0;
  }
}
img{
  width: 20px;
  height: 20px;
}


</style>