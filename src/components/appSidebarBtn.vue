<template>
  <button class="sidebarBtn" @click="store.toggleMenu">
    <ion-icon v-if="store.isOpen" name="arrow-back"></ion-icon>
    <ion-icon v-else name="menu"></ion-icon>
  </button>
</template>

<script setup>
import {useMenuStore} from "@/store/menuStore";

const store = useMenuStore()
</script>

<style scoped lang="scss">
.sidebarBtn{
  position: fixed;
  top: 90px;
  background-color: #fff;
  border: solid 1px #00000050;
  box-shadow: 0 0 6px #00000010;
  border-radius: 0 50px 50px 0!important;
  width: 50px;
  aspect-ratio: 1;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem!important;
  padding: 0!important;
}
</style>