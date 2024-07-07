// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image"],
  app: {
    baseURL: '', // Replace with your repo name
     buildAssetsDir: 'assets',
  },

  ui: {
    icons: ['mdi', 'fa','devicon','heroicons','fa'],
  }
  ,router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})