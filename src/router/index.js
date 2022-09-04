import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GlobalView from '@/views/GlobalView.vue'
import RegionalView from "@/views/RegionalView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/global',
    name: 'global',
    component: GlobalView
  },
  {
    path: '/regional',
    name: 'regional',
    component: RegionalView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'activeLink',
  routes
})
router.beforeEach((to, from, next) => {
  console.log('horaaaaa')
  next()
})
export default router
