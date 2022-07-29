<template>
  <div>
    <div>{{ msg }}</div>
    <a-table :columns="columns" :data-source="data"> </a-table>
  </div>
</template>
<script lang="ts">
  import { ref } from 'vue'
  import { defineComponent } from 'vue'

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Range',
      dataIndex: 'range',
      key: 'range',
    },
    {
      title: 'Shena',
      dataIndex: 'shena',
      key: 'shena',
    },
    {
      title: 'Day2',
      dataIndex: 'day2',
      key: 'day2',
    },
    {
      title: 'Day3',
      dataIndex: 'day3',
      key: 'day3',
    },
    // accumulate
    {
      title: 'DivergeMax',
      dataIndex: 'divergeMax',
      key: 'divergeMax',
    },
    {
      title: 'Unusual',
      dataIndex: 'unusual',
      key: 'unusual',
    },
  ]

  const data = [
    {
      key: '1',
      date: '2022-06-01',
      range: 5.91,
      Shena: 0.3,
      day2: 0,
      day3: 0,
      divergeMax: 0,
      unusual: '0',
    },
    {
      key: '2',
      date: '2022-06-02',
      range: 10,
      Shena: 0.5,
      day2: 0,
      day3: 0,
      divergeMax: 0,
      unusual: '0',
    },
    {
      key: '3',
      date: '2022-06-03',
      range: 10,
      Shena: -0.2,
      day2: 0,
      day3: 0,
      divergeMax: 0,
      unusual: '0',
    },
  ]

  export default defineComponent({
    setup() {
      const msg = ref('Hello 123')
      return {
        msg,
        data,
        columns,
      }
    },
  })
</script>
<style></style>
