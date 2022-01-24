import { defineStore } from 'pinia'

export interface ICounter {
  count: number
}

export const useCounterStore = defineStore('counter', {
  state: (): ICounter => {
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
