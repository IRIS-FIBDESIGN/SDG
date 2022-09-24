<template>
  <div  style="background-color:#fafafa!important;">
    <home-hero/>
    <home-about/>
    <home-info/>
    <home-contact/>
    <div class="row-c p-1 f-light" style="background: #5F8BA5;">
      &copy; {{ rightsYear }} {{ copyright }}
    </div>
  </div>
</template>

<script setup>
import HomeHero from "@/views/Home/homeHero";
import HomeAbout from "@/views/Home/homeAbout";
import HomeContact from "@/views/Home/homeContact";
import HomeInfo from "@/views/Home/homeInfo";
import mainInfo from '../../public/json/main.json'
import {nextTick, onMounted} from "vue";
const copyright = mainInfo.copyrights
const rightsYear = new Date().getFullYear();

</script>

<style scoped>

</style>