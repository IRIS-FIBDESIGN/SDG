<template>
<div v-html="data" class="p-3-5"></div>
</template>

<script setup>
import globalInfo from '../../../public/json/global.json'
const {data} = globalInfo
</script>

<style scoped>

</style>