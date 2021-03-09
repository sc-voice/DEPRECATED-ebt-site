<template>
  <scv-article :article="article">
    <nuxt-content :document="article" />
  </scv-article>
</template>
<script>
  import { ScvVue } from '@sc-voice/scv-static';
  const { ScvArticle } = ScvVue;
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('author', params.slug).fetch()
      return { article }
    },
    components: { ScvArticle, },
  }
</script>
