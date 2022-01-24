<template>
  <div>
    <div>{{ msg }}</div>
    <div class="pinia-test">{{ store.count }}</div>
    <a-button @click="store.increment">点击一下</a-button>
  </div>
</template>
<script lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref } from 'vue'
  import { useCounterStore, ICounter } from '../store/counter'

  export default {
    components: {},
    setup() {
      const msg = ref('Hello World')

      const store = useCounterStore()

      return { msg, store }
    },
  }
</script>
<style></style>
