<template>
<div class="column-c">
  <div v-for="(box, index) in boxes" :key="index" class="box" data-aos="fade-right" :data-aos-delay="index * 200">
    <h4 class="primaryColor">{{box.title}}</h4>
    <p class="f-secondary f-justify">{{box.description}}</p>
  </div>
</div>
</template>

<script setup>
import homeInfo from '../../../public/json/home.json'
const boxes = homeInfo.info
</script>

<style scoped lang="scss">
.box{
  background-color: #fff;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 2rem;
  max-width: 500px;
  margin-bottom: 3rem;

  &:nth-child(1){margin-left: -30%;border-bottom: 3px solid #5BBDE2;}
  &:nth-child(2){margin-right: -15%;border-bottom: 3px solid #8E44AD;}
  &:nth-child(3){margin-left: -5%;border-bottom: 3px solid #E74C3C;}



  @media screen and (max-width: 500px){
    margin: 1rem 0!important;
  }
}

@media screen and (max-width: 500px){
  .column-c{
    padding: 2rem;
  }
}
</style>