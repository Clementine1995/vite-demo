import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import User from '../views/User.vue'
import About from '../views/About.vue'

const descComponent = () => {
  return import('../views/Desc')
}

export const routerHistory = createWebHashHistory()

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/desc',
      name: 'desc',
      component: descComponent
    },
    { 
      path: '/user/:id', 
      name: 'user', 
      component: User, 
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('from:',from)
  console.log('to:',to)
  next()
})