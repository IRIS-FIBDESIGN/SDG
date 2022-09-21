<template>
  <div class="row">
    <div class="xcol-info" v-if="store.isOpen">
      <global-sidebar class="sidebarMobileMargin"/>
    </div>
    <div class="xcol-body">
      <div v-html="methodology" class="p-3-5"></div>
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
import globalInfo from '../../../public/json/global.json'
import GlobalSidebar from "@/views/Global/globalSidebar";
import GlobeMap from "@/components/GlobeMap";
import {useMenuStore} from "@/store/menuStore";

const {methodology} = globalInfo
const store = useMenuStore()
</script>

<style scoped lang="scss">

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