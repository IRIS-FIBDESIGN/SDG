import HomeView from '@/views/HomeView.vue'
import country from "@/router/country";
import regional from "@/router/regional";
import global from "@/router/global";

export default [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    ...global,
    ...regional,
    ...country
]