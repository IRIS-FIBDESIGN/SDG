<template>
  <div class="mother column-c">
    <div class="info">
      <div class="bordered column-c">
        <img :src="require('@/assets/SDG-logos/'+SDGs[sdgId-1].icons.colored)" alt="">
      </div>
    </div>
    <div :class="'target-'+sdgId"></div>
    <p :style="'color:'+ SDGs[sdgId-1].color">{{ sdgId }}. {{ SDGs[sdgId - 1].label }}</p>
  </div>
</template>

<script setup>

import {nextTick, onMounted, defineProps, toRefs} from "vue";
import SDGs from '../../../public/json/SDG.json'
import countryInfo from '../../../public/json/country.json'

const {targetSuffix} = countryInfo
const props = defineProps({
  dataProp: {
    similar: Number,
    highPerf: Number,
    lowPerf: Number,
    other: Number
  },
  sdgId: Number
})
const {dataProp, sdgId} = toRefs(props);

const width = 200,
    height = 200,
    innerRadius = 0,
    outerRadius = 60;

const radius = Math.min(width, height) / 2 - innerRadius;

// "indicatorsColors": {
//   "similar": "#F7C25C",
//       "highPerformer": "#46E6B3",
//       "lowPerformer": "#F8778E",
//       "cannotBeEvaluated": "#b9b9b9"
// },
const data = dataProp.value;
const {indicatorsColors} = countryInfo
const colors = [
  indicatorsColors.similar,
  indicatorsColors.highPerformer,
  indicatorsColors.lowPerformer,
  indicatorsColors.cannotBeEvaluated
]

onMounted(() => {
  nextTick(() => {
    const chart = d3.select(".target-" + sdgId.value)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


    const color = d3.scaleOrdinal().domain(data).range(colors);
    const arc = d3.arc().innerRadius(outerRadius).outerRadius(radius)
    const pie = d3.pie().sort(null).value(d => d.value);
    const data_ready = pie(d3.entries(data));

    chart
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('fill', d => color(d.data.key))
        .transition().delay(function (d, i) {
      return i * 500;
    }).duration(500)
        .attrTween('d', function (d) {
          var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
          if (d.startAngle === d.endAngle) return false
          return function (t) {
            d.endAngle = i(t);
            return arc(d);
          }
        })

    chart
        .selectAll('allLabels')
        .data(data_ready)
        .enter()
        .append('text')
        .attr("text-anchor", "middle")
        .text(function (d) {
          return d.data.value === 0 ? '' : d.data.value + targetSuffix
        })
        .attr('transform', function (d) {
          var pos = arc.centroid(d);
          return 'translate(' + pos + ')';
        })
        .attr('fill', 'white')
        .style("font-weight", 'bold')
        .style("font-size", '12px')
        .style("text-shadow", '0 0 3px #00000050')


  })
})
</script>

<style scoped lang="scss">
.mother {
  position: relative;
  width: 100%;
  margin-bottom: 7rem;

  &:before {
    position: absolute;
    content: '';
    width: calc(100% + 10px);
    left: -5px;
    height: calc(100% + 7rem);
    top: -1.5rem;
    background-color: #fff;
    z-index: -1;
    border-radius: 30px;
    box-shadow: 0 0 16px #00000005;
  }
}

.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

img {
  width: 40px;
}

p {
  position: absolute;
  bottom: -1rem;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem !important;
  text-align: center;
  transform: translateY(100%);
}

.bordered {
  width: 200px;
  aspect-ratio: 1;
  border: 40px solid #00000050;
  border-radius: 50%;
  z-index: -1;
  margin-top: -5px;
  //box-shadow: 0 0 6px #00000020, inset 0 0 16px #00000020;
}
</style>