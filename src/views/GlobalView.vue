<template>
  <!-- ============== nav ============== -->
  <transition name="slide">
    <nav class="bg-white w-100 row" v-if="tab !== null">
      <div @click="tab = null" class="link active row alignCenter">
        <ion-icon name="arrow-back" class="mr-1"></ion-icon>
        <p>back</p>
      </div>
      <div class="link" @click="changeTab(GlobalGoals)" :class="{'active': tab === GlobalGoals}">All Goals</div>
      <div class="link" @click="changeTab(GlobalInteraction)" :class="{'active': tab === GlobalInteraction}">Interaction</div>
      <div class="link" @click="changeTab(GlobalMethodology)" :class="{'active': tab === GlobalMethodology}">Methodology</div>
      <div class="link" @click="changeTab(GlobalData)" :class="{'active': tab === GlobalData}">Data</div>
    </nav>
  </transition>
  <!-- ============== sidebar ============== -->
  <transition name="fade" mode="out-in">
    <div class="pl-5 mt-5" v-if="tab === null">
      <h4 class="primaryColor">{{ title }}</h4>
      <app-sidebar>
        <sidebar-item @click="changeTab(GlobalGoals)" label="All Goals" icon="apps" rountT/>
        <sidebar-item @click="changeTab(GlobalInteraction)" label="Interaction" icon="bar-chart"/>
        <sidebar-item @click="changeTab(GlobalMethodology)" label="Methodology" icon="document-text"/>
        <sidebar-item @click="changeTab(GlobalData)" label="Data" icon="analytics" borderless/>
      </app-sidebar>
      <chart-top-goals :top-goals="topGoals" class="mt-5"/>
    </div>
  </transition>
  <!-- ============== scale pages ============== -->
  <transition name="fade" mode="out-in">
    <component :is="tab" class="tab mt-5"/>
  </transition>
  <!-- ============== 3d earth ============== -->
  <div class="row-c">
    <div class="xx" :class="{'goRight': tab !== null}">
      <globe-map style="z-index: -1;"/>
    </div>
  </div>
</template>

<script setup>
import GlobeMap from "@/components/GlobeMap";
import {markRaw, ref} from "vue";
import AppSidebar from "@/components/appSidebar";
import SidebarItem from "@/components/sidebarItem";
import ChartTopGoals from "@/components/chartTopGoals";
import GlobalGoals from "@/views/Global/GlobalGoals.vue"
import GlobalInteraction from "@/views/Global/GlobalInteraction.vue"
import GlobalMethodology from "@/views/Global/GlobalMethodology.vue"
import GlobalData from "@/views/Global/GlobalData.vue"
import globalScale from '../../public/json/global.json'

const {title, topGoals} = globalScale

const tab = ref(null)

function changeTab(comp) {
  tab.value = markRaw(comp)
}
</script>
<style scoped lang="scss">
nav{
  position: fixed;
  z-index: 1;
  border-top: solid 1px #00000010;
  box-shadow: 3px 0  16px #00000005;
  padding: .5rem 3rem;
  display: flex;
  align-items: center;
  .link{
    cursor: pointer;
    color: #00000090;
    margin-right: 1rem;
    &.active, &:hover{
      font-weight: bold;
      color: var(--primaryColor);
    }

  }
}
.tab {
  width: 70%;
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
.fade{
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
.slide{
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