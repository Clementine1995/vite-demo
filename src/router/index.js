import { createRouter, createWebHashHistory } from 'vue-router';


export const routes = [
  {
      path: '/',
      name: 'Layout',
      redirect: '/dashboard',
      component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
      meta: {
          title: '首页'
      },
      children: [
        {
          path: '/dashboard',
          name: 'Home',
          component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
        }
      ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
