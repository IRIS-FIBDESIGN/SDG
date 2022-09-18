import {defineStore} from "pinia";

export const useMenuStore = defineStore('menuStore', {
    state: () => ({
        isOpen: true
    }),
    actions:{
        toggleMenu(){
            this.isOpen = !this.isOpen
        },
    }
})