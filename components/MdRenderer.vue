<template>
    <div v-html="result">
    </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it"
import { reactive, ref } from "vue"

const props = defineProps<{
    content: string
}>()

const md = new MarkdownIt()

const result = md.render(props.content || '# markdown-it rulezz!')



</script>

<style lang="less" scoped>
</style>