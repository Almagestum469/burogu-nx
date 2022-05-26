<template>

    <div>{{ hello }}</div>

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>



</template>

<script lang="ts" setup>
const hello = ref("")
const counter = useCounter()
onMounted(async () => {
    hello.value = await $fetch('/api/hello')
})

</script>
