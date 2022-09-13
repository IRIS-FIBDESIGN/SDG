<template>

  <div class="row">
    <div class="xcol-info">
      <div class="p-sticky">
        <country-sidebar/>
        <transition name="fade-slide" mode="out-in" appear>
          <div class="box">
            <h6 class="primaryColor">legend</h6>
            <div class="row alignCenter mb-1 mt-2">
              <div class="color-1"></div>
              <p>Similar</p>
            </div>
            <div class="row alignCenter mb-1">
              <div class="color-2"></div>
              <p>High Performer</p>
            </div>
            <div class="row alignCenter mb-1">
              <div class="color-3"></div>
              <p>Low Performer</p>
            </div>
            <div class="row alignCenter">
              <div class="color-4"></div>
              <p>Cannot be evaluated</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="xcol-body">
      <div class="row p-3-5">
        <div v-for="(indicator,index) in indicators" :key="index" class="xcol-4-2">
          <indicator-chart :data-prop="indicator.value" :sdg-id="indicator.sdgId"/>
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

.color {
  &-1, &-2, &-3, &-4 {
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-right: 1rem;
  }

  &-1 {
    background-color: #FEB019;
  }

  &-2 {
    background-color: #01E396;
  }

  &-3 {
    background-color: #FF4560;
  }

  &-4 {
    background-color: #b9b9b9;
  }
}

.p-sticky {
  top: 100px;
}
</style>