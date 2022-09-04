<template>
<section class="f-center z-1">
  <h3 class="primaryColor">{{title}}</h3>
  <p class="f-secondary">{{description}}</p>
  <img src="@/assets/home-about-box-1.png" class="box-1" alt="box">
  <img src="@/assets/home-about-box-2.png" class="box-2" alt="box">
  <img src="@/assets/home-about-box-3.png" class="box-3" alt="box">
  <img src="@/assets/home-about-box-4.png" class="box-4" alt="box">
</section>
</template>

<script setup>
import homeInfo from '../../../public/json/home.json'

const {title, description} = homeInfo.about
</script>

<style scoped lang="scss">
section{
  padding:12rem 0;
  position: relative;
}
h3{
  position: relative;
  width: fit-content;
  margin-inline: auto!important;
  &:before{
    position: absolute;
    left: -2rem;
    transform: translateX(-100%) scale(0.9);
    content: url("@/assets/home-about-left.png");
  }
  &:after{
    position: absolute;
    right: -2rem;
    transform: translateX(100%) scale(0.9);
    content: url("@/assets/home-about-right.png");

  }
}
p{
  width: 70%;
  margin-inline: auto!important;
}
img{
  position: absolute;
  z-index: -1;
}
.box-1{left: 0;top: 0;width: 120px}
.box-2{left: 3rem;bottom: 0;;width: 250px}
.box-3{left: 50%;top: 25%;width: 100px}
.box-4{right: 0;top: -20%;width: 300px}
</style>