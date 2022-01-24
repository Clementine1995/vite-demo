import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/OtherPage.vue'
import PiniaPage from '../views/PiniaPage.vue'

const routes: Array<RouteRecordRaw> = [
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
