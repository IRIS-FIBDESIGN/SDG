<template>
<div class="contact">
  <div class="row box bg-white round-30">
    <div class="xcol-2-2" style="padding: 3rem;">
      <h4 class="primaryColor">{{title}}</h4>
      <p class="f-justify f-secondary">{{description}}</p>
      <div class="row mt-3">
        <div class="xcol-2-2 row-c"><a :href="universityLink"><img src="@/assets/un-logo-big.png" alt=""></a></div>
        <div class="xcol-2-2 row-c"><a :href="labLink"><img src="@/assets/lab-logo-big.png" alt=""></a></div>
      </div>
    </div>
    <div class="xcol-2-2 rm-padding">
      <img src="@/assets/university.jpg" alt="The University of Melbourne" class="university">
    </div>
  </div>
</div>
</template>

<script setup>
import homeInfo from '../../../public/json/home.json'
import mainInfo from '../../../public/json/main.json'
const {title, description} = homeInfo.contact
const {universityLink, labLink} = mainInfo
</script>

<style scoped lang="scss">
.contact{
  padding: 3rem;
}
.box{
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}
.university{
  width: 100%;
  height: 100%;
  border-radius: 0 30px 30px 0;

  @media screen and (max-width: 500px){
    border-radius: 0 0 30px 30px;
  }
}
</style>