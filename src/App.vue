<template>
  <div>
    <app-nav/>
    <router-view/>
  </div>
</template>

<script setup>
import AppNav from "@/components/appNav";
</script>

<style lang="scss">
@import "fib-maxup/css/index.css";
@import url('https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

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
</style>