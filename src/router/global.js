import GlobalView from "@/views/GlobalView";
import GlobalMethodology from "@/views/Global/GlobalMethodology";
import GlobalData from "@/views/Global/GlobalData";
import GlobalAllGoals from "@/views/Global/GlobalGoals";
import GlobalInteraction from "@/views/Global/GlobalInteraction";

export default [
    {
        path: '/global',
        name: 'global',
        component: GlobalView
    },

    {
        path: '/global/methodology',
        component: GlobalMethodology
    },
    {
        path: '/global/data',
        component: GlobalData
    },
    {
        path: '/global/all-goals',
        component: GlobalAllGoals
    },
    {
        path: '/global/interaction',
        component: GlobalInteraction
    },
]