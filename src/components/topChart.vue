<template>
  <div class="row alignCenter space chart">
    <p>{{ label }}</p>
    <img :src="require('@/assets/SDG-logos/'+icons.min)" alt="">
  </div>
</template>

<script setup>
import {defineProps, toRefs} from "vue";
const props = defineProps({
  goal:Object,
})
const {goal} = toRefs(props)

const {color, label, icons} = goal.value
</script>

<style scoped lang="scss">
.chart{
  padding: 5px 1rem;
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
img{
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

@keyframes fillChart {
  from{
    inset-inline-end: 100%;
  }
  to{
    inset-inline-end: 0;
  }
}
</style>