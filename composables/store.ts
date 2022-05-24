import { defineStore } from "pinia";

export const useCounter = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});

// usage

// const counter = useCounterStore()

//     counter.count++
//     // with autocompletion ✨
//     counter.$patch({ count: counter.count + 1 })
//     // or using an action instead
//     counter.increment()
