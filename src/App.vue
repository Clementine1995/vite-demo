<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/user/12">User</router-link>
    <router-link to="/desc">Desc</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
