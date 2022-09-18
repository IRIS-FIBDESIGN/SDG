import {defineStore} from "pinia";
import goals from '../../public/json/SDG.json'
export const useGoalStore = defineStore('goalStore', {
    actions:{
        findGoal(id){
            return goals.find( goal => goal.id === id)
        }
    }
})