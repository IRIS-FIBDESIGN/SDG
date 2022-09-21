<template>
  <div class="row">
    <div class="xcol-info" v-if="store.isOpen">
      <global-sidebar class="sidebarMobileMargin"/>
    </div>
    <div class="xcol-body">
      <div class="pl-5 pt-3">
        <div v-for="(goal,index) in interaction" :key="index" class="row alignCenter mb-1 line" :class="'chart-'+(index+1)">
          <p>{{ goal.label }}</p>
          <interaction-chart :interaction="interaction[0].percentage" :goal="goal"/>
          <p class="percentage"  :style="'color:'+goal.color">
            <count-up :end-val="goal.percentage" :options="{suffix:'%',decimalPlaces:  Number.isInteger(goal.percentage) ? 0 : 2}" :duration="3" :delay="2"></count-up>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ============== 3d earth ============== -->
  <div class="row-c">
    <div class="xx goRight">
      <globe-map style="z-index: -1;"/>
    </div>
  </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import globalInfo from '../../../public/json/global.json'
import InteractionChart from "@/views/Regional/interactionChart";
import GlobalSidebar from "@/views/Global/globalSidebar";
import GlobeMap from "@/components/GlobeMap";
import {useMenuStore} from "@/store/menuStore";

const {interaction} = globalInfo
const store = useMenuStore()
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


.xx {
  width: 600px;
  height: 600px;
  margin-top: 50px;
  position: fixed;
  top: 5%;
  right: 35%;
  transform: translateX(50%);
  z-index: -10;
  transition: 0.5s ease;

  &.goRight {
    right: 0 !important;
    opacity: 0.2;
  }

  &:before {
    position: absolute;
    inset: -5%;
    background-color: #fff;
    content: '';
    z-index: -10;
    border-radius: 50%;
  }

  &:after {
    position: absolute;
    content: '';
    z-index: -10;
    border-radius: 50%;
    inset: -20%;
    border: 2rem solid #fff;

  }
}
</style>