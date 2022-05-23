<template>
    <div ref="editorEl"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import "@toast-ui/editor/dist/toastui-editor.css";

onMounted(async () => {
    if (process.client) {
        const { Editor } = await import("@toast-ui/editor")

        const editor = new Editor({
            el: editorEl.value,
            height: "500px",
            initialEditType: "markdown",
            previewStyle: "vertical",
        });
        editor.getMarkdown();
    }
});

const editorEl = ref(null);
</script>

<style scoped>
</style>
