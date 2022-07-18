<template>
  <div class="container mb-10">
    <h1 class="article-title my-8 text-5xl text-slate-800">
      Switching the Linux graphics stack from GLX to EGL
    </h1>
    <img
      src="assets/pictures/webgpu-cube-wgsl.png"
      alt=""
      class="w-12/12 sm:w-7/12 lg:w-5/12 max-h-screen float-left mr-4 mb-4 rounded-xl"
    />
    <blockquote class="article-quote text-xl m-0 mb-4 text-slate-600">
      Hi there! This is a guest post from Robert Mader, who contributed enormous
      improvements to Firefox's graphics stack on Linux. TL;DR In the upcoming
      Firefox 94 release we will enable the EGL backend for a big group of our
      Linux users. This will increase WebGL performance, reduce resource
      consumption and make our life as developers …
    </blockquote>
    <div
      class="article-info text-sm clear-both text-slate-400 flex flex-wrap gap-4"
    >
      <div class="author flex gap-1 items-center whitespace-nowrap">
        <div class="i-mdi-account"></div>
        <div>Alexander Trusova</div>
      </div>
      <div class="category flex gap-1 items-center whitespace-nowrap">
        <div class="i-mdi-folder"></div>
        <div>Uncategorized</div>
      </div>
      <div class="comments-number flex gap-1 items-center whitespace-nowrap">
        <div class="i-mdi-chat"></div>
        <div>27 Comments</div>
      </div>
      <div class="date flex gap-1 items-center whitespace-nowrap">
        <div class="i-mdi-clock"></div>
        <div>October 30, 2021</div>
      </div>
      <div class="time-to-read flex gap-1 items-center whitespace-nowrap">
        <div class="i-mdi-document"></div>
        <div>4 Minutes</div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
></script>

<style scoped></style>
