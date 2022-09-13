<template>
  <app-loading/>
  <div>
    <app-nav class="p-sticky t-0 z-9"/>
    <router-view/>
  </div>
</template>

<script setup>
import AppNav from "@/components/appNav";
import AppLoading from "@/components/appLoading";
</script>

<style lang="scss">
@import "fib-maxup/css/index.css";

:root{

  --primaryColor: #244868;

  background-color: #E7ECF8;

  font-family: 'Open Sans', sans-serif;
  .openSans{font-family: 'Open Sans', sans-serif!important;}
  h1,h2,h3,h4,h5,h6{
    font-family: 'Istok Web', sans-serif;
    font-weight: bold;
  }

  @media screen and (max-width: 500px){
    font-size: 10px;
  }
}
.primaryColor{color: var(--primaryColor);}
.primaryBgColor{background-color: var(--primaryColor);}
.pcon{
  padding-inline: 3rem;
}
.contr{
  width: 75%;
}
aside .activeLink * {
  color: var(--primaryColor)!important;
  fill: var(--primaryColor)!important;
}
.fade {
  &-slide {
    &-enter-from, &-leave-to {
      opacity: 0;
      translate: -20%;
    }

    &-enter-to, &-leave-from {
      opacity: 1
    }

    &-enter-active, &-leave-active {
      transition: 0.5s ease-in-out
    }
  }

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
</style>