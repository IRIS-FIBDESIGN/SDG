<template>
  <div class="infoBox">
    <div class="row alignCenter"  @click="opened = !opened">
      <div class="numBox">{{ number }}</div>
      <p class="infoBox-title"  v-if="opened">{{ title }}</p>
    </div>
    <div class="incomeSection" v-if="opened" @click="opened=false ">
      <hr>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref, toRefs} from "vue";
const props = defineProps({
  number:String,
  title: String,
  color: String
})
const opened = ref(false)
const {color,number,title} = toRefs(props)
const colored = color.value

</script>

<style scoped lang="scss">

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