<template>
  <article
    class="markdown-body"
    ref="blog"
  ></article>
</template>

<script
  setup
  lang="ts"
>
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/github.css";

const blog = ref<HTMLElement>(null);

const md = new MarkdownIt({
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return "";
  },
});

useFetch("/api/hello").then(({ data }) => {
  blog.value.innerHTML = md.render(data.value.test_markdown);
});
</script>

<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
