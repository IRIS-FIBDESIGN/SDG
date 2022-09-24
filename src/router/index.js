import { createRouter, createWebHistory } from 'vue-router'
import routes from "@/router/routes";


const pageTransition = (to, from, next) => {
  next()
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'activeLink',
  routes
})

router.beforeEach(pageTransition)

export default router
