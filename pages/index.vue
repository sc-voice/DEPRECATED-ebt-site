<template>
  <v-card flat>
    <v-card-text class="nuxt-content">
      <h1> Welcome to EBT-Site</h1>
      <p>
      EBT-Site is a Github template repository for creating
      individual or community Buddhist websites based on 
      the Early Buddhist Texts (EBTs) and translations hosted on
      <a ref="https://suttacentral.net">SuttaCentral</a>
      </p>

      <ul>
          <li><nuxt-link to="/suttas">Suttas</nuxt-link></li>
          <li><nuxt-link to="/wiki">Wiki</nuxt-link></li>
          <li><nuxt-link to="/news">News</nuxt-link></li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
const { 
  name:appName,
  version,
} = require('@/package.json');

export default {
  components: {
  },
  data: function(){
    return {
      appName,
    };
  },
  mounted() {
  },
  methods:{
  },
  computed: {
  },
}
</script>
<style>
</style>
