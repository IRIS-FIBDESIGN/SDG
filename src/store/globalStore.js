import {defineStore} from 'pinia'
import regionalInformation from "../../public/json/regional.json";

export const useGlobalStore = defineStore('globalStore', {
    actions: {
        findData(kind, region, income) {
            const regionParam = Object.values(regionalInformation.value).find(reg => {
                return reg.id === region
            })
            let incomeParam = null
            switch (kind) {
                case 'topGoals':
                    incomeParam = Object.values(regionParam.value.topGoals.value).find(inc => {
                        return inc.id === income
                    }).value
                    break;
                case 'allGoals':
                    incomeParam = Object.values(regionParam.value.allGoals.value).find(inc => {
                        return inc.id === income
                    }).value
                    break;
                case 'interaction':
                    incomeParam = Object.values(regionParam.value.interaction.value).find(inc => {
                        return inc.id === income
                    }).value
                    break;
                case 'methodology':
                    incomeParam = Object.values(regionParam.value.methodology.value).find(inc => {
                        return inc.id === income
                    }).value
                    break;
                case 'data':
                    incomeParam = Object.values(regionParam.value.data.value).find(inc => {
                        return inc.id === income
                    }).value
                    break;
            }
            return incomeParam;
        },
        findLabel(region, income, hasBreak = true) {

            const regi = Object.values(regionalInformation.value).find(regi => {
                return regi.id === region
            })

            const inci = Object.values(regi.value.topGoals.value).find(inc => {
                return inc.id === income
            })

            return hasBreak
                ? regi.label + ' <br> ' + inci.label
                : regi.label + ' - ' + inci.label
        },
        findMap(region){
            const regi = Object.values(regionalInformation.value).find(regi => {
                return regi.id === region
            })
            return regi.image
        }
    }
})