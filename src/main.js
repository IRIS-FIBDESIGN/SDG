import {computed, createApp, ref} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import VueApexCharts from "vue3-apexcharts";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true
});



const app = createApp(App);

app.use(router)
    .use(createPinia())
    .use(VueApexCharts)
    .mount('#app')


