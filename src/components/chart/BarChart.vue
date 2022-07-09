<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>
<script lang="ts">
  import { defineComponent, h, PropType } from 'vue'
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PluginOptionsByType,
    ChartOptions,
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  )
  // chartData          Object with Chart data
  // chartOptions       Object with Chart options
  // datasetIdKey	      Id key for Chart data datasets
  // chartId            Id of the canvas
  // width              Chart width
  // height             Chart height
  // cssClasses         String with css classes for the surrounding div
  // styles             Object with css styles for the surrounding div container
  // plugins            Array with Chart plugins

  export default defineComponent({
    name: 'BarChart',
    components: { Bar },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart',
      },
      width: {
        type: Number,
        default: 400,
      },
      height: {
        type: Number,
        default: 400,
      },
      cssClasses: {
        default: '',
        type: String,
      },
      datasetIdKey: {
        type: String,
        default: 'label',
      },
      styles: {
        type: Object as PropType<Partial<CSSStyleDeclaration>>,
        default: () => {},
      },
      plugins: {
        type: Object as PropType<PluginOptionsByType<'bar'>>,
        default: () => {},
      },
    },
    setup(props) {
      const chartData = {
        labels: ['January', 'February', 'March'],
        datasets: [{ label: 'test', data: [40, 20, 12] }],
      }

      const chartOptions: ChartOptions = {
        responsive: false,
      }

      return {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      }
    },
  })
</script>
