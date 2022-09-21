import { createRouter, createWebHistory } from 'vue-router'
import routes from "@/router/routes";


const pageTransition = (to, from, next) => {
  const pageTransition = document.getElementsByClassName('pageTransition')[0]
  pageTransition.classList.add('activate')
  setTimeout(()=> next(),3300)
  setTimeout(()=> pageTransition.classList.remove('activate'),4010)
  // next()
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'activeLink',
  routes
})

router.beforeEach(pageTransition)

export default router
