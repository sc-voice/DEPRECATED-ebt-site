import NuxtConfig from '@sc-voice/scv-static/nuxt.config';
let CONFIG = JSON.parse(JSON.stringify(NuxtConfig));
var { name } = require('./package.json');
var appName = name.split('/').filter(n=>n.length).pop();
var babelCompact;
let BABEL_ENV = process.env.BABEL_ENV;
let routerBase = `/${appName}/`;
babelCompact = BABEL_ENV === 'deploy' ? true : false;

CONFIG.router.base = routerBase;
Object.assign(CONFIG.head, {
    titleTemplate: '%s - static',
    title: appName,
    htmlAttrs: {
      lang: null,
    },
});

export default CONFIG;
