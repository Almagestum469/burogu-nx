<template>
  <NuxtLayout> <NuxtPage></NuxtPage> </NuxtLayout>
</template>

<script
  lang="ts"
  setup
>
const hello = ref("");
const counter = useCounter();
onMounted(async () => {
  hello.value = await $fetch("/api/hello");
});
</script>
