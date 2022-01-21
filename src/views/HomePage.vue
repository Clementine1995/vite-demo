<template>
  <div>
    <HelloWorld :msg="msg" />

    <div class="test">
      <css-doodle> </css-doodle>
    </div>
  </div>
</template>
<script lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import 'css-doodle'
  import HelloWorld from '@/components/HelloWorld.vue'
  import { ref } from 'vue'

  export default {
    components: {
      HelloWorld,
    },
    setup() {
      const msg = ref('Hello World')
      return { msg }
    },
  }
</script>
<style></style>
