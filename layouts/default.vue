<template>
  <v-app >
    <v-app-bar dark :clipped-left="clipped" fixed app hide-on-scroll >
      <scv-app-bar 
        title="EBT-Site" 
        :imgUrl="ebtSiteImage"
        :monolingual="ebtLang"
        >
        <v-btn icon class="scv-icon-btn" 
          title="Github"
          :href="githubUrl" target="_blank">
          <v-icon>{{ mdiGithub }}</v-icon>
        </v-btn>
      </scv-app-bar>
    </v-app-bar>
    <div class="site-main">
      <v-container class="site-content">
        <nuxt />
      </v-container>
    </div>
    <v-footer app dark >
      <scv-cursor />
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
const { version } = require('~/package.json');
const {
  mdiGithub,
} = require('@mdi/js');
import { ScvVue } from '@sc-voice/scv-static';
let {
  ScvAppBar,
  ScvCursor,
} = ScvVue;

export default {
  components: {
    ScvCursor,
    ScvAppBar,
  },
  data () {
    return {
      clipped: false,
      mdiGithub,
    }
  },
  mounted() {
    console.log('layouts/default mounted', 
        this.$nuxt,
    );
  },
  methods: {
  },
  computed: {
    version() {
      return version;
    },
    ebtLang() {
        return this.$nuxt.context.env.ebt_lang;
    },
    ebtSiteImage() {
        return this.$nuxt.context.env.ebt_site_image;
    },
    githubUrl() {
        let {
          ebt_repository,
          ebt_account,
        } = this.$nuxt.context.env;
        return `https://github.com/${ebt_account}/${ebt_repository}`;
    },
  },
}
</script>
<style>
.site-main {
}
.site-content {
  margin-top: 90px;
  padding: 0;
  padding-bottom: 60px;
}
</style>
