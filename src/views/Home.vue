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
import { reactive, readonly, watch, ref } from 'vue'
export default {
  name: 'home',
  setup() {
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

    function increase () {
      console.log(msg)
      list.push({
        key: list.length + '',
        name: msg.name
      })
    }
    function delPerson(idx, key) {
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
  },
  mounted() {
    console.log(this)
    this.msg = reactive({
      name: 'liuliu',
      age: 21
    })
  }
}
</script>