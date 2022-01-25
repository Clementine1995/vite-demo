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
  getters: {
    doubleCount: state => state.count * 2,
    doublePlusOne(): number {
      return this.doubleCount + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
