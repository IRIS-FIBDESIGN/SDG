import RegionalGoals from "@/views/Regional/RegionalGoals";
import RegionalMethodology from "@/views/Regional/RegionalMethodology";
import RegionalData from "@/views/Regional/RegionalData";
import RegionalInteraction from "@/views/Regional/RegionalInteraction";
import RegionalView from "@/views/RegionalView";

export default [
    {
        path: '/regional',
        name: 'regional',
        component: RegionalView
    },
    {
        path: '/regional/all-goals/:region/:income',
        name: 'regionalAllGoals',
        component: RegionalGoals
    },
    {
        path: '/regional/methodology/:region/:income',
        name: 'regionalMethodology',
        component: RegionalMethodology
    },
    {
        path: '/regional/data/:region/:income',
        name: 'regionalData',
        component: RegionalData
    },
    {
        path: '/regional/interaction/:region/:income',
        name: 'regionalInteraction',
        component: RegionalInteraction
    },
]