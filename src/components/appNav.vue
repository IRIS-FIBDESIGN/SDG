<template>
  <div>
    <transition name="nav" appear>
      <transition-group tag="nav" name="nav-brand" :class="{'navIsActive': navIsActive}" class="navigation bg-white">
        <router-link to="/" class="brand">
          <div>
            <p>{{ title }}</p>
            <p>{{ subtitle }}</p>
          </div>
        </router-link>
        <div class="nav-toggle" @click="navIsActive = !navIsActive"><ion-icon name="menu"></ion-icon></div>
        <ul>
          <li class="navItems"><router-link to="/">Home</router-link></li>
          <li class="navItems"><router-link to="/global">Global</router-link></li>
          <li class="navItems"><router-link to="/regional">Regional</router-link></li>
          <li class="navItems"><router-link to="/country">Country</router-link></li>
        </ul>

        <ul class="ml-auto">
          <li><a :href="universityLink" class="imageLink"><img src="@/assets/un-logo.png" alt="logo"></a></li>
          <li><a :href="labLink" class="imageLink"><img src="@/assets/lab-logo.png" alt="logo"></a></li>
        </ul>
      </transition-group>
    </transition>
  </div>
</template>

<script setup>
import mainInfo from '../../public/json/main.json'
import {nextTick, onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
const {title, subtitle, universityLink, labLink} = mainInfo

const navIsActive = ref(false);
const route = useRoute()
onMounted(()=>{
  nextTick(()=>{
    const navBtn = document.getElementsByClassName('nav-toggle')[0]
    navBtn.setAttribute('data-collapse', (window.innerWidth <= 800))
  })
})

watch(
    () => route.path,
    ()=> {
      navIsActive.value = false
    }
)
</script>

<style scoped lang="scss">
.navigation{
  z-index: 10000!important;
}
.nav-toggle *{
  font-size: 2rem;
}
@media screen and (max-width: 500px){
  .navItems{
    margin-bottom: 1rem;
    *{
      font-size: 16px;
    }
  }
}
.imageLink {
  opacity: 1 !important;

  &:hover img {
    transform: scale(1.05);
  }

  img {
    width: 55px;
    transition: 0.2s ease-in-out;
  }
}

.activeLink, li a:hover {
  color: var(--primaryColor);
}

.brand {
  div {
    position: relative;
    padding-right: 2.5rem;
    margin-right: 2.5rem;

    &:after {
      position: absolute;
      content: '';
      right: 0;
      inset-block: 5px;
      width: 1px;
      background-color: #00000010;
    }
  }

  p {
    &:first-child {
      font-size: 13px;
      font-weight: bold;
      color: var(--primaryColor);
    }

    &:last-child {
      font-size: 13px;
      color: var(--primaryColor);
    }
  }
}

/*============ animations ===========*/
.nav-enter-from,.nav-leave-to{
  opacity: 0;
  transform: translateY(-100%);
}
.nav-enter-to,.nav-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.nav-enter-active,.nav-move,.nav-leave-active{
  transition:all 0.5s ease-in-out;
}
.nav-brand-enter-from,.nav-brand-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.nav-brand-enter-to,.nav-brand-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.nav-brand-enter-active,.nav-brand-move,.nav-brand-leave-active{
  transition:all 0.3s ease;
}
.nav-brand-leave-active{
  position: absolute;
}
</style>