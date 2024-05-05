// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "vue3-carousel/dist/carousel.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["vue3-carousel-nuxt", "nuxt-icon", "@formkit/nuxt"],
  formkit: {
    autoImport: true,
  },
});