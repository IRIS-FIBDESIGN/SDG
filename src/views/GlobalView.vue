<template>
  <!-- ============== sidebar ============== -->
  <transition name="fade" mode="out-in">
    <div class="mt-2 info">
      <h4 class="primaryColor">{{ title }}</h4>
      <global-sidebar/>
      <chart-top-goals :top-goals="topGoals" class="mt-5"/>
    </div>
  </transition>
  <!-- ============== 3d earth ============== -->
  <div class="row-c">
    <div class="xx">
      <globe-map style="z-index: -1;"/>
    </div>
  </div>
</template>

<script setup>
import GlobeMap from "@/components/GlobeMap";
import ChartTopGoals from "@/components/chartTopGoals";
import globalScale from '../../public/json/global.json'
import GlobalSidebar from "@/views/Global/globalSidebar";

const {title, topGoals} = globalScale

</script>
<style scoped lang="scss">

.tab {
  width: 100%;
}
.info{
  padding: 1rem 2rem;
}


.xx {
  width: 600px;
  height: 600px;
  margin-top: 50px;
  position: fixed;
  top: 5%;
  right: 33%;
  transform: translateX(50%);
  z-index: -10;
  transition: 0.5s ease;

  @media screen and (max-width: 500px){
    opacity: 0.1;
    right: 50%;
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

/* ================== */
.fade {
  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-to, &-leave-from {
    opacity: 1
  }

  &-enter-active, &-leave-active {
    transition: 0.5s ease-in-out
  }
}

.slide {
  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  &-enter-to, &-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  &-enter-active, &-leave-active {
    transition: 0.5s ease-in-out
  }
}
</style>