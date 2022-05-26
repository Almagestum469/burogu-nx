<template>
  <div
    class="head-bar backdrop-blur-sm p-5 flex flex-row justify-between items-center bg-slate-100 bg-opacity-50 text-slate-400 sticky top-0 left-0"
  >
    <MenuIcon
      class="h-5 w-5 hover:text-slate-500 hover:cursor-pointer"
      @click="toggleMenuActive(true)"
    ></MenuIcon>
    <h1 class="title text-slate-500 text-xl font-light">{{ data.title }}</h1>
    <SearchIcon
      class="h-5 w-5 hover:text-slate-500 hover:cursor-pointer"
    ></SearchIcon>
  </div>

  <div
    class="menu-background absolute top-0 left-0"
    :class="
      data.menuActive
        ? 'w-screen h-screen bg-white bg-opacity-25 backdrop-blur-sm'
        : ''
    "
    @click.self="toggleMenuActive(false)"
  >
    <div
      class="menu absolute top-0 w-60 h-screen bg-white p-3 transition-all duration-500"
      :class="
        data.menuActive ? 'left-0  shadow-md shadow-slate-200' : '-left-60'
      "
    >
      <XIcon
        @click="toggleMenuActive(false)"
        class="text-slate-400 hover:text-slate-500 hover:cursor-pointer h-5 w-5"
      ></XIcon>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { MenuIcon, XIcon, SearchIcon } from "@heroicons/vue/outline";

const data = reactive({
  menuActive: false,
  title: "Hello World!",
});

function toggleMenuActive(val: boolean) {
  data.menuActive = val;
}
</script>

<style scoped></style>
