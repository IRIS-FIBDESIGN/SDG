<template>
<aside class="bg-white">
  <ul class="rm-padding">
    <slot />
  </ul>
</aside>
</template>

<script setup>
</script>

<style scoped lang="scss">
aside{
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  box-shadow: 0 0 16px #00000010;
  border-radius: 30px;
}

</style>