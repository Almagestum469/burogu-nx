<template>
  <button ref="saveButton">Save</button>
  <div ref="editorEl"></div>
</template>

<script
  setup
  lang="ts"
>
import { ref, onMounted } from "vue";
import "@toast-ui/editor/dist/toastui-editor.css";

const editorEl = ref<HTMLElement>(null);
const saveButton = ref<HTMLElement>(null);

onMounted(async () => {
  if (process.client) {
    const { Editor } = await import("@toast-ui/editor");

    const editor = new Editor({
      el: editorEl.value,
      height: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
    });

    // Initial document
    editor.setMarkdown("# H1 Title", true);

    // Save document

    saveButton.value.addEventListener("click", () => {
      console.log(editor.getMarkdown());
    });
  }
});
</script>

<style scoped></style>
