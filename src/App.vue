<template>
  <div id="nav">
    <router-link to="/">Home</router-link>/
    <router-link to="/about">About</router-link>/
    <router-link to="/pinia">Pinia</router-link>/
    <router-link to="/daily">Daily</router-link>/
    <router-link to="/calc">Calc</router-link>
  </div>
  <router-view />
</template>
<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 20px;
  }
  /* @media (prefers-color-scheme: dark) {
    body {
      background: #333;
      color: white;
    }
  } */
</style>
