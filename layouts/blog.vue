<template>
  <div ref="blog"></div>
</template>

<script
  setup
  lang="ts"
>
import MarkdownIt from "markdown-it";

const blog = ref<HTMLElement>(null);

const md = new MarkdownIt();

onMounted(async () => {
  const { data } = await useFetch("/api/hello");
  console.log(data.value.test_markdown);
  const result = md.render(data.value.test_markdown);
  //const result = md.render("# H1");
  blog.value.innerHTML = result;
});
</script>

<style scoped></style>
