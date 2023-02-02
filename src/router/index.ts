import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/OtherPage.vue'
import PiniaPage from '../views/PiniaPage.vue'

const routes = [
  // 加入类型声明可以约束配置项，提升书写体验
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: PiniaPage,
  },
  {
    path: '/daily',
    name: 'Daily',
    component: () => import('../views/DailyPage.vue'),
  },
  {
    path: '/calc',
    name: 'Calc',
    component: () => import('../views/CalcPage.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
