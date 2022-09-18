<template>
  <div class="pageTransition">
    <img src="@/assets/loading-logo.svg" alt="logo" class="loading-logo">
    <img src="@/assets/loading-sdgs.svg" alt="logo" class="loading-sdgs">
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
$animationTime: 4s;
.pageTransition{
  position: fixed;
  z-index: 999;
  inset-inline-start: 0;
  inset-inline-end: 100vw;
  inset-block: 0;
  //background-color: #000000aa;
  background-color: var(--primaryColor);
  //backdrop-filter: blur(3px);
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    pointer-events: none;
    transition:opacity 0.5s ease ;
    transform-origin: 0 0;
  }
  &.activate{
    animation: pageTransition  $animationTime  forwards ease-in-out;
    .loading-logo{animation: fadeImg $animationTime forwards ease-in-out;}
    .loading-sdgs{
      animation: rotate 10s linear infinite,
      fadeImg $animationTime forwards ease-in-out;
    }
  }
}
.loading-logo{
  width: 20%;
  @media screen and (max-width: 500px){
    width: 40%;
  }
}
.loading-sdgs{
  width: 40%;
  @media screen and (max-width: 500px){
    width: 90%;
  }
}
@keyframes rotate {
  from{rotate: 0deg;}
  to{rotate: 360deg;}
}
@keyframes fadeImg {
  0%{opacity: 0;}
  30%{opacity: 1;}
  70%{opacity: 1;}
  100%{opacity: 0;}
}

@keyframes pageTransition {
  0% {
    inset-inline-start: 0;
    inset-inline-end: 100vw;
  }
  20% {
    inset-inline-start: 0;
    inset-inline-end: 0;
  }
  80% {
    inset-inline-start: 0;
    inset-inline-end: 0;
  }
  100% {
    inset-inline-start: 100vw;
    inset-inline-end: 0;
  }
}
</style>