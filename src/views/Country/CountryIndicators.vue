<template>

  <div class="row">
    <div class="xcol-info" v-if="menuStore.isOpen">
      <div class="p-sticky sidebarMobileMargin">
        <country-sidebar/>
        <transition name="fade-slide" mode="out-in" appear>
          <div class="box">
            <h6 class="primaryColor legend" @click="changeChart('all')">legend</h6>
            <div class="row alignCenter pointer mt-1"
                 :class="{'active': ['all','similar'].includes(selected)}"
                 @click="changeChart('similar')">
              <div class="color" :style="'background:' + indicatorsColors.similar"></div>
              <p>Similar</p>
            </div>
            <div class="row alignCenter pointer"
                 :class="{'active': ['all','highPerformer'].includes(selected)}"
                 @click="changeChart('highPerformer')">
              <div class="color" :style="'background:' + indicatorsColors.highPerformer"></div>
              <p>High Performer</p>
            </div>
            <div class="row alignCenter pointer"
                 :class="{'active': ['all','lowPerformer'].includes(selected)}"
                 @click="changeChart('lowPerformer')">
              <div class="color" :style="'background:' + indicatorsColors.lowPerformer"></div>
              <p>Low Performer</p>
            </div>
            <div class="row alignCenter pointer"
                 :class="{'active': ['all','cannotBeEvaluated'].includes(selected)}"
                 @click="changeChart('cannotBeEvaluated')">
              <div class="color" :style="'background:' + indicatorsColors.cannotBeEvaluated"></div>
              <p>Cannot be evaluated</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="xcol-body">
      <div v-if="selected === 'all'" class="row p-3-5">
        <div v-for="(indicator,index) in indicators" :key="index" class="xcol-4-2">
          <indicator-chart  :data-prop="indicator.value" :sdg-id="indicator.sdgId"/>
        </div>
      </div>
      <div v-else class="p-3-5">
        <div v-for="(indicator,index) in indicators" :key="index" class="mb-2">
          <div class="goal row">
            <div class="xcol-info goalChild">
              <global-circle-chart class="chart" v-if="selected === 'similar'" :percentage="indicator.value.similar" :color="indicator.sdgId"/>
              <global-circle-chart class="chart" v-if="selected === 'highPerformer'" :percentage="indicator.value.highPerf" :color="indicator.sdgId"/>
              <global-circle-chart class="chart" v-if="selected === 'lowPerformer'" :percentage="indicator.value.lowPerf" :color="indicator.sdgId"/>
              <global-circle-chart class="chart" v-if="selected === 'cannotBeEvaluated'" :percentage="indicator.value.other" :color="indicator.sdgId"/>
              <div class="row-c">
                <img :src="require('@/assets/SDG-logos/'+goalStore.findGoal(indicator.sdgId).icons.colored)" class="mr-1"/>
                <img :src="require('@/assets/SDG-logos/'+goalStore.findGoal(indicator.sdgId).icons.labeled)"/>
              </div>
            </div>
            <div class="xcol-body goalChild">
              <div v-if="selected === 'similar'" v-html="indicator.descriptions.similar"></div>
              <div v-if="selected === 'highPerformer'" v-html="indicator.descriptions.highPerf"></div>
              <div v-if="selected === 'lowPerformer'" v-html="indicator.descriptions.lowPerf"></div>
              <div v-if="selected === 'cannotBeEvaluated'" v-html="indicator.descriptions.other"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import countryIndo from '../../../public/json/country.json'

const {indicators} = countryIndo
import IndicatorChart from "@/views/Country/indicatorChart";
import CountrySidebar from "@/views/Country/countrySidebar";
import {useMenuStore} from "@/store/menuStore";
import countryInfo from "../../../public/json/country.json";
import GlobalCircleChart from "@/views/Global/GlobalCircleChart";
import {ref} from "vue";
import {useGoalStore} from "@/store/goalStore";

const selected = ref('all')
const {indicatorsColors} = countryInfo
const menuStore = useMenuStore()
const goalStore = useGoalStore()

const changeChart = (val) => {
  selected.value = val
  if(window.innerWidth < 500){
    menuStore.toggleMenu()
  }
}
</script>

<style scoped lang="scss">
.box {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 16px #00000005;
  padding: 1.5rem;
  position: sticky;
  top: 8rem;
}
.legend{
  cursor: pointer;
  &:hover:after{
    opacity: 1;
  }
  &:after{
    content: '(all)';
    margin-left: 5px;
    font-weight: normal;
    font-size: 14px;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }
}
.pointer{
  cursor: pointer;
  opacity: 0.2;
  padding: 5px 10px;
  border-radius: 50px;
  transition: 0.2s ease-in-out;
  &:hover{
    background-color: #5F8BA510;
    opacity: 1;
  }
  &.active{
    opacity: 1;
  }
}
.color {

  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-right: 1rem;
}
.p-sticky {
  top: 100px;
}
.goal{
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 16px #00000005;
  padding: 1rem;
  min-height: 250px;
}
</style>