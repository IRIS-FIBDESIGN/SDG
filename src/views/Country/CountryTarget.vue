<template>

  <div class="row rm-padding">
    <div class="xcol-info">
      <country-sidebar class="p-sticky"/>
    </div>
    <div class="xcol-body">
      <div class="p-3-5">
        <sankey-chart :data-props="target" class="chart"/>

        <div class="boxInfo">
          <div  class="box box-highPerformer">
            <h6 class="primaryColor">{{ highPerformer.label }}</h6>
            <hr>
            <div v-html="highPerformer.value"></div>
          </div>
          <div  class="box box-lowPerformer">
            <h6 class="primaryColor">{{ lowPerformer.label }}</h6>
            <hr>
            <div v-html="lowPerformer.value"></div>
          </div>
          <div class="box box-similar">
            <h6 class="primaryColor">{{ similar.label }}</h6>
            <hr>
            <div v-html="similar.value" ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img class="countryBg" src="@/assets/country-bg.png" alt="world map">

</template>

<script setup>
import SankeyChart from "@/views/Country/sankeyChart";
import countryInfo from '../../../public/json/country.json'
import {useRoute} from "vue-router";
import CountrySidebar from "@/views/Country/countrySidebar";

const sdgParam = useRoute().params.sdgId
const sdgId = parseInt(sdgParam)
const target = countryInfo.targets.value.find(t => t.sdgId === sdgId)

const {highPerformer,  lowPerformer,  similar} = target.info
</script>

<style scoped lang="scss">
.chart{
  width: 100%;
}
.box{
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  &-highPerformer{
    background-color: #46E6B350;
    border: 1px solid  #46E6B3;
  }
  &-lowPerformer{
    background-color: #F8778E50;
    border: 1px solid  #F8778E;
  }
  &-similar{
    background-color: #F7C25C50;
    border: 1px solid  #F7C25C;
    margin-bottom: 2rem;
  }
}

.p-sticky{
  top: 90px;
}
.countryBg{
  position: fixed;
  height: 80vh;
  top: 8rem;
  right: -3rem;
  z-index: -1;
}
</style>