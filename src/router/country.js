import CountryGoals from "@/views/Country/CountryGoals";
import CountryTargets from "@/views/Country/CountryTargets";
import CountryTarget from "@/views/Country/CountryTarget";
import CountryIndicators from "@/views/Country/CountryIndicators";
import CountryMethodology from "@/views/Country/CountryMethodology";
import CountryData from "@/views/Country/CountryData";
import CountryView from "@/views/CountryView";

export default [
    {
        path: '/country',
        name: 'country',
        component: CountryView
    },
    {
        path: '/country/all-goals',
        name: 'countryGoals',
        component: CountryGoals
    },
    {
        path: '/country/targets',
        name: 'CountryTargets',
        component: CountryTargets
    },
    {
        path: '/country/targets/:sdgId',
        name: 'CountryTarget',
        component: CountryTarget
    },
    {
        path: '/country/indicators',
        name: 'CountryIndicators',
        component: CountryIndicators
    },
    {
        path: '/country/methodology',
        name: 'CountryMethodology',
        component: CountryMethodology
    },
    {
        path: '/country/data',
        name: 'CountryData',
        component: CountryData
    },
]