<template>
<div class="row alignCenter hero">
  <div class="xcol-2 info order-t-2">
    <h4 class="primaryColor">{{title}}</h4>
    <h4 class="primaryColor" style="font-weight: unset">{{ subtitle }}</h4>
    <div class="mt-2"></div>
    <p class="f-secondary f-justify description">{{description}}</p>
    <div class="row mt-3">
      <hero-btn label="Global" link="/global" img="GlobalImg.png" data-aos="fade-left"/>
      <hero-btn label="Regional" link="/regional" img="RegionalImg.png" data-aos="fade-left" data-aos-delay="200"/>
      <hero-btn label="Country" link="/country" img="CountryImg.png" data-aos="fade-left" data-aos-delay="400"/>
    </div>
  </div>
  <div class="xcol-2 order-t-1">
    <img src="@/assets/hero.png" class="w-100" alt="sdg hero image"  data-aos="fade-in">
  </div>
</div>
</template>

<script setup>
import mainInfo from "../../../public/json/main.json"
import homeInfo from "../../../public/json/home.json"
import HeroBtn from "@/views/Home/heroBtn";
const {description} = homeInfo.hero
const {title, subtitle} = mainInfo
</script>

<style scoped>
.description{
  font-size: 13px;
  line-height: 2rem;
}
.info{
  padding-right: 5rem!important;
}
.hero{
  padding: 3rem!important;
}
</style>