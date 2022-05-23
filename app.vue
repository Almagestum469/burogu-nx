<template>

    <div>{{ hello }}</div>





</template>

<script lang="ts" setup>
const hello = ref("")

onMounted(async () => {
    hello.value = await $fetch('/api/hello')
})

</script>
