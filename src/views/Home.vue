<template>
  <div>{{ msg }}</div>
  <div>{{ myRef }}</div>
  <input type="text" v-model="msg.name">
  <button @click="increase">增加</button>
  <ul>
    <li v-for="(item, idx) of list" :key="item.key">
      <div>
        <span>{{ item.name }}</span>
        <span @click="delPerson(idx, item.key)">-</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { reactive, readonly, watch, watchEffect, ref, onMounted, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'home',
  setup() {
    const { ctx } = getCurrentInstance()
    let msg = reactive({
      name: 'zhangsan',
      age: 39
    })
    let myRef = ref(3)

    let list = reactive([
      {
        key: '1',
        name: 'Ame',
        detail: ''
      },
      {
        key: '2',
        name: 'Maybe'
      },
      {
        key: '3',
        name: 'Charles'
      },
      {
        key: '4',
        name: 'fy'
      },
      {
        key: '5',
        name: 'xNova'
      }
    ])
    onMounted(() => {
      // 直接对 响应式对象重新赋值会导致切断联系
      msg = reactive({
        name: 'liuliu',
        addr: '11111111'
      })
    })
    watchEffect(() => {
      console.log(useRoute())
    })
    function increase () {
      console.log(msg)
      list.push({
        key: list.length + '',
        name: msg.name
      })
    }

    function delPerson(idx, key) {
      console.log(msg)
      // list = list.filter(item => item.key !== key)
      list.splice(idx, 1)
    }

    return {
      msg,
      increase,
      list,
      delPerson,
      myRef
    }
  }
}
</script>