<template>
<router-link :to="link" class="hero-btn">
  <div class="">
    <img :src="require('@/assets/'+img)" :alt="label">
    <p class="label">{{label}}</p>
  </div>
</router-link>
</template>

<script>
export default {
  name: "heroBtn",
  props:['link','label','img']
}
</script>

<style scoped lang="scss">
.hero-btn{
  aspect-ratio: 1;
  min-width: 180px;
  margin: 0 16px 16px 0;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px -4px 16px 0px hsla(0, 0%, 0%, 0.05);
  transition: 0.2s ease-in-out;
  position: relative;
  border-bottom: 3px solid #31699A;
  overflow: hidden;

  &:before{
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: 0.2s ease-in-out;
    background-color: #31699A;
  }

  &:hover{
    box-shadow: 0px -4px 20px 0px hsla(0, 0%, 0%, 0.1);
    .label{
      color: white;
    }
    &:before{
      height: 50px;
    }
  }
}

.label{
  transition: 0.2s ease-in-out;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
}
img{
  width: 60%;
  transition: 0.2s ease-in-out;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>