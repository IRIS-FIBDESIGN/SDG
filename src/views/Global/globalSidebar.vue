<template>
  <transition name="fade-slide" mode="out-in" appear>
    <div class="p-sticky">
      <app-sidebar>
        <router-link to="/global/all-goals" class="w-100">
          <sidebar-item label="All Goals" icon="apps" rountT/>
        </router-link>
        <router-link to="/global/interaction" class="w-100">
          <sidebar-item label="Interaction" icon="bar-chart"/>
        </router-link>
        <router-link to="/global/methodology" class="w-100">
          <sidebar-item label="Methodology" icon="document-text"/>
        </router-link>
        <router-link to="/global/data" class="w-100">
          <sidebar-item label="Data" icon="analytics" borderless/>
        </router-link>
      </app-sidebar>
    </div>
  </transition>
</template>

<script setup>

import AppSidebar from "@/components/appSidebar";
import SidebarItem from "@/components/sidebarItem";
</script>

<style scoped lang="scss">
.p-sticky{
  top: 100px;
  @media screen and (max-width: 500px) {
    margin-top: 3rem;
    *{
      font-size: 2.2rem!important;
    }
  }
}
</style>