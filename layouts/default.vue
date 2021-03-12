<template>
  <v-app >
    <v-app-bar dark :clipped-left="clipped" fixed app hide-on-scroll flat >
      <scv-app-bar 
        title="EBT-Site" 
        imgUrl="chris-petrow-j4Wia6JDLm0-unsplash.png"
        :monolingual="ebtLang"
        >
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
