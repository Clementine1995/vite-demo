<template>
  <div>
    <div>{{ msg }}</div>
    <div class="pinia-test">Count: {{ store.count }}</div>
    <div class="pinia-test">Double Count: {{ store.doubleCount }}</div>
    <div class="pinia-test">
      Double Count Plus One: {{ store.doublePlusOne }}
    </div>
    <a-button @click="store.increment">点击一下</a-button>
    <a-button @click="store.randomizeCounter">随机一下</a-button>
  </div>
</template>
<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref } from 'vue'
  import { useCounterStore } from '../store/counter'
  const msg = ref('Hello World')
  const store = useCounterStore()
</script>
<style></style>
