import yaml from 'js-yaml';
import fs from 'fs';
const EBT_SITE_YAML = yaml.safeLoadAll(fs.readFileSync('./ebt-site.yaml'))[0] || {};
const REPO_NAME = __dirname.split('/').pop()

import NuxtConfig from '@sc-voice/scv-static/nuxt.config';
let CONFIG = JSON.parse(JSON.stringify(NuxtConfig));

console.log(`nuxt.config.js`,{ 
    REPO_NAME,
    EBT_SITE_YAML,
});

let {
    ebt_lang=null,
} = EBT_SITE_YAML;


CONFIG.router.base = `/${REPO_NAME}`;
Object.assign(CONFIG.head, {
    titleTemplate: REPO_NAME,
    title: REPO_NAME,
    htmlAttrs: {
      lang: ebt_lang === "all" ? null : ebt_lang,
    },
});
CONFIG.env = Object.assign({}, CONFIG.env, {
    ebt_lang,
});
CONFIG.watch = Object.assign([], CONFIG.watch, [
    './ebt-site.yaml',
]);

export default CONFIG;
