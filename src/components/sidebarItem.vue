<template>
<li>
  <div class="sidebarItem row alignCenter" :class="{'borderless roundB':borderless, 'roundT': roundT}">
    <img v-if="customIcon"  class="icon mr-1" :src="require('@/assets/'+icon)" alt="icon">
    <ion-icon v-else :name="icon" class="icon mr-1"></ion-icon>
    <p>{{label}}</p>
    <ion-icon name="arrow-forward" class="ml-auto icon"></ion-icon>
  </div>
</li>
</template>

<script>
export default {
  name: "sidebarItem",
  props: {
    label: String,
    borderless: Boolean,
    roundT: Boolean,
    icon: String,
    customIcon: Boolean,
  }
}
</script>

<style scoped lang="scss">
.borderless{
  border-bottom: unset!important;
  border-radius:0 0 30px 30px;
}
.roundT{
  border-radius: 30px 30px 0 0 ;
}
.sidebarItem{
  cursor: pointer;
  margin-bottom: 5px;
  padding: 0.6rem 25px;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  border-bottom: solid #00000020 1px;
  p{
    width: fit-content!important;
  }
  p,.icon{
    transition: 0.2s ease-in-out;
    color: #8d8d8d;
    fill: #8d8d8d;
  }
  &:hover, &.activeLink{
    //background-color: #E9EDF0;
    //color: var(--primaryColor);

    p,.icon{
      color: var(--primaryColor);
      fill: var(--primaryColor);
    }
  }
}
</style>