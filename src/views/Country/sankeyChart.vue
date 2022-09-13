<template>
  <div class="chart">
    <div :id="'chart-'+SDGs[sdgId-1].label"></div>
  </div>
</template>

<script setup>
import {nextTick, onMounted, defineProps, toRefs} from "vue";
import SDGs from '../../../public/json/SDG.json'

const props = defineProps({
  dataProps: {
    sdgId: Number,
    data: Object,
    nodes: Object
  }
})

const {dataProps} = toRefs(props);

const data = dataProps.value.data
const sdgId = dataProps.value.sdgId
const nodes = [
  {id:"SDG",name:"SDG" ,color: SDGs[sdgId - 1].color ,height: 200,width: 50},
    ...dataProps.value.nodes,
  {id:"highPerformer",name:"High Performer", color:"#46E6B3"},
  {id:"lowPerformer",name:"Low Performer", color:"#F8778E"},
  {id:"similar",name:"Similar", color:"#F7C25C"}
]

onMounted(() => {
  nextTick(() => {
    const chart = Highcharts.chart('chart-' + SDGs[sdgId - 1].label, {
      credits: {
        enabled: false
      },
      accessibility: {
        point: {
          valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
      },
      tooltip: {
        backgroundColor: '#fff',
        borderRadius: 20,
        boxShadow: '0 0 16px #00000020',
      },
      series: [{
        // keys: ['from', 'to', 'weight'],
        data,
        nodes,
        type: 'sankey',
        name: SDGs[sdgId - 1].label
      }]

    });

    chart.setTitle({
      useHTML: true,
      text: `<div class="row alignCenter">
             <img src='${require('@/assets/SDG-logos/' + SDGs[sdgId - 1].icons.colored)}' class="mr-1" alt='' />
             <h6 style="color: ${SDGs[sdgId - 1].color}">${SDGs[sdgId - 1].label}</h6>
             </div>`
    }, {
      text: "SDG-" + sdgId
    });
  })
})
</script>

<style scoped lang="scss">
.chart {
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 16px #00000010;
  &:hover{
    box-shadow: 0 0 16px #00000060;
  }
}
</style>