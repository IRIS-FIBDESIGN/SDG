<template>

  <div class="row rm-padding">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <country-sidebar class="p-sticky sidebarMobileMargin"/>
    </div>
    <div class="xcol-body">
      <div class="bounder">
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
import {useMenuStore} from "@/store/menuStore";

const sdgParam = useRoute().params.sdgId
const sdgId = parseInt(sdgParam)
const target = countryInfo.targets.value.find(t => t.sdgId === sdgId)

const {highPerformer,  lowPerformer,  similar} = target.info

const menuStore = useMenuStore()
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
@media screen and (min-width: 500px){
  .bounder{
    padding: 2rem 3rem;
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