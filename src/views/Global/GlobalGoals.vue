<template>
  <div>
    <transition-group tag="div" name="fadeIn" class="row" appear>
      <div v-for="SDG in allGoals" :key="SDG.id" class="xcol-5-3 column-c">
        <globalCircleChart :percentage="SDG.percentage" :color="SDG.id"/>

        <div class="row-c ">
          <p class="pr-1">{{ SDG.icon }}</p>
          <p>{{ SDG.title }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>


<script setup>
import globalScale from "../../../public/json/global.json"
import GlobalCircleChart from "@/views/Global/GlobalCircleChart";

const {allGoals} = globalScale
</script>


<style scoped lang="scss">
.scaleUp {
  transform: scale(1.1);
}
circle{
  fill: none;
  stroke: red;
  stroke-width: 20px;
  stroke-dasharray: 450;
  transition: 0.5s ease;
}

</style>