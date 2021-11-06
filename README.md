# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Rollup.js

Vite 使用 Rollup 作为打包工具。

[Rollup.js 中文文档](https://rollupjs.org/guide/zh/)

## esbuild

Vite 使用[esbuild](https://esbuild.github.io/)进行依赖预构建

## Vercel

不错的网站托管服务[Vercel](https://vercel.com/)

## 如何全局挂载全局属性和方法

```js
const app = createApp(App)
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$axios = axios
```

## 使用 vue-router

通过使用 getCurrentInstance 或者 vue-router 提供的 useRoute, useRouter

```js
import { getCurrentInstance, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
export default {
  setup() {
    //  拿到当前组件 this(ctx)
    const { ctx } = getCurrentInstance()
    // 拿到  $router
    // const $router = useRouter()
    const $router = ctx.$router
    // 拿到  $route
    //  const $route = useRoute()
    const $route = unref(ctx.$router.currentRoute)
  }
}
```

## setup 函数里如何拿到 vuex 的$store

```js
import { getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    //  拿到当前组件 this(ctx)
    const { ctx } = getCurrentInstance()
    // console.log(ctx.$store)
    // 在这里这样是拿不到的，因为$store在beforeCreate生命周期里注入，而setup函数在beforeCreate之前执行
    // 此链接的文章里有介绍 https://blog.csdn.net/qq_39953537/article/details/105703894
    // const $store = useStore()
    onMounted(() => {
      console.log(ctx.$store)
    })
  },
}
```

## 服务端渲染相关框架

[Nuxt.js](https://v3.nuxtjs.org/getting-started/introduction)
[Next.js](https://nextjs.org/docs)
