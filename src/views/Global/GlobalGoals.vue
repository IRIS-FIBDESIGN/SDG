<template>
  <div class="row">
    <div class="xcol-info" v-if="store.isOpen">
      <global-sidebar/>
    </div>
    <div class="xcol-body">
      <div>
        <transition-group tag="div" name="fadeIn" class="row" appear>
          <div v-for="SDG in allGoals" :key="SDG.id" class="xcol-5-3-2 column-c">
            <globalCircleChart :percentage="SDG.percentage" :color="SDG.id"/>
            <div class="row-c ">
              <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.colored)" class="mr-1"/>
              <img :src="require('@/assets/SDG-logos/'+SDGs[SDG.id-1].icons.labeled)"/>
            </div>
          </div>
        </transition-group>
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
import globalScale from "../../../public/json/global.json"
import SDGs from "../../../public/json/SDG.json"
import GlobalCircleChart from "@/views/Global/GlobalCircleChart";
import AppSidebar from "@/components/appSidebar";
import SidebarItem from "@/components/sidebarItem";
import GlobalGoals from "@/views/Global/GlobalGoals.vue"
import GlobalInteraction from "@/views/Global/GlobalInteraction.vue"
import GlobalMethodology from "@/views/Global/GlobalMethodology.vue"
import GlobalData from "@/views/Global/GlobalData.vue"
import GlobeMap from "@/components/GlobeMap";
import GlobalSidebar from "@/views/Global/globalSidebar";
import {useMenuStore} from "@/store/menuStore";

const {allGoals} = globalScale
const store = useMenuStore()
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
.p-sticky{
  top: 100px;
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