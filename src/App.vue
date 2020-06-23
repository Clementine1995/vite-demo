<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/user/12">User</router-link>
      <router-link to="/desc">Desc</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
