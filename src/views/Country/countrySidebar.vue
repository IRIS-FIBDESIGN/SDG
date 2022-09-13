<template>
  <transition name="fade-slide" mode="out-in" appear>
    <app-sidebar>
      <router-link to="/country/all-goals" class="w-100">
        <sidebar-item label="Goals" icon="apps" rountT/>
      </router-link>
      <router-link to="/country/Targets" class="w-100">
        <sidebar-item label="Targets" icon="country-targets.svg" custom-icon/>
      </router-link>
      <router-link to="/country/Indicators" class="w-100">
        <sidebar-item label="Indicators" icon="pie-chart"/>
      </router-link>
      <router-link to="/country/methodology" class="w-100">
        <sidebar-item label="Methodology" icon="document-text"/>
      </router-link>
      <router-link to="/country/data" class="w-100">
        <sidebar-item label="Data" icon="analytics" borderless/>
      </router-link>
    </app-sidebar>
  </transition>
</template>

<script setup>

import AppSidebar from "@/components/appSidebar";
import SidebarItem from "@/components/sidebarItem";
</script>

<style scoped lang="scss">
</style>