<template>
  <div class="nuxt-content scv-toc">
    <h2>General Interest</h2>
    <scv-article-items :article="article" :items="general"/>
    <h2>Wiki Administration</h2>
    <scv-article-items :article="article" :items="admin"/>
  </div>
</template>
<script>
  import { ScvVue } from '@sc-voice/scv-static';
  const {
    ScvArticleItems,
  } = ScvVue;
  export default {
    async asyncData({ $content, params }) {
      const items = await $content('wiki')
        .only(['title', 'category', 'description', 'img', 'slug', 'author'])
        .sortBy('order', 'asc')
        .fetch()
      const general = items.filter(item=>item.category==='general');
      const admin = items.filter(item=>item.category==='admin');

      return {
        items,
        general,
        admin,
        article: {
          slugDir: 'wiki',
        },
      }
    },
    components: {
      ScvArticleItems,
    },
  }
</script>
<style>
</style>
