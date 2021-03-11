  <template>
    <scv-article :article="article">
      <nuxt-content :document="article" />
      <scv-image-info :article="article" />
    </scv-article>
  </template>
  <script>
    import { ScvVue } from '@sc-voice/scv-static';
    const { ScvArticle, ScvImageInfo } = ScvVue;
    export default {
      async asyncData({ $content, params }) {
        const article = await $content('images', params.slug).fetch()
        return { article }
      },
      components: { ScvArticle, ScvImageInfo, },
    }
  </script>
