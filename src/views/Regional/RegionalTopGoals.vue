<template>
  <chart-top-goals :top-goals="goals"/>
</template>

<script setup>
import ChartTopGoals from "@/components/chartTopGoals";
import {defineProps, ref, toRefs, watch} from "vue";
import {useGlobalStore} from "@/store/globalStore";

const store = useGlobalStore()

const props = defineProps({
  region: String,
  income: String
})
const {region,income} = toRefs(props)
const goals = ref([])

goals.value = store.findData('topGoals', region.value, income.value)
</script>

<style scoped>

</style>