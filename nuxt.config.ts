// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@nuxtjs/i18n" ,'@intlify/nuxt3'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  intlify: {
    localeDir: 'lang',
    vueI18n: {
      locale: 'CN',
      fallbackLocale: 'CN'
    }
  }
});
