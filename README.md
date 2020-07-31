# vite-demo

Vite demo with router

## 如何全局挂载全局属性和方法

```js
const app = createApp(App)

// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$axios = axios
```

## 使用vue-router

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
