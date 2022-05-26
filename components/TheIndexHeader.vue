<template>
  <div
    class="head-bar backdrop-blur-sm p-2 flex flex-row justify-between items-center text-slate-400 shadow-md shadow-slate-200"
  >
    <MenuIcon
      class="h-6 w-6 hover:text-slate-500"
      @click="toggleMenuActive(true)"
    ></MenuIcon>
    <h1 class="title text-slate-500 text-xl font-light">Title</h1>
    <SearchIcon class="h-6 w-6 hover:text-slate-500"></SearchIcon>
  </div>

  <div
    class="menu absolute top-0 w-60 h-screen bg-white p-2 shadow-md shadow-slate-200 transition-all duration-500"
    :class="data.menuActive ? 'left-0' : '-left-60'"
  >
    <XIcon
      @click="toggleMenuActive(false)"
      class="text-slate-400 hover:text-slate-500 h-6 w-6"
    ></XIcon>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/vue/outline";

const data = reactive({
  menuActive: false,
});

function toggleMenuActive(val: boolean) {
  data.menuActive = val;
}
</script>

<style scoped></style>
