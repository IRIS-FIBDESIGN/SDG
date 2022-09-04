<template>
<div v-html="methodology" class="p-3-5"></div>
</template>

<script setup>
import globalInfo from '../../../public/json/global.json'
const {methodology} = globalInfo
</script>

<style scoped>

</style>