<template>
  <div class="infoBox">
    <div class="row alignCenter"  @click="opened = !opened">
      <div class="numBox">{{ number }}</div>
      <p class="infoBox-title bold"  v-if="opened || openedTitle">{{ title }}</p>
    </div>
    <div class="incomeSection" v-if="opened" @click="opened=false ">
      <hr>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref, toRefs} from "vue";
const props = defineProps({
  number:String,
  title: String,
  color: String
})
let opened = ref(false)
let openedTitle = ref(false)
const {color,number,title} = toRefs(props)
const colored = color.value
onMounted(()=>{
  openedTitle.value = window.innerWidth < 500
})
</script>

<style scoped lang="scss">
.bold{
  font-weight: bold;
  @media screen and (max-width: 500px){
    font-size: 16px;
    padding-right: 10px;
  }
}
.numBox {

  width: 30px;
  aspect-ratio: 1;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: v-bind(colored)
}

.infoBox {
  background-color: #fff;
  padding: 1rem;
  border-radius: 15px;
  width: fit-content;
  box-shadow: 0 36px 48px rgba(45, 103, 160, 0.38);
  position: absolute;
  cursor: pointer;

  transition: 0.2s ease;

  &-title {
    margin-left: 1rem!important;
  }

  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    transform: rotate(45deg) translateY(50%);
    left: 25px;
    background: #fff;
    width: 20px;
    aspect-ratio: 1;
    z-index: -1;
  }

  z-index: 2;
}


</style>