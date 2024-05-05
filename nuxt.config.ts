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

  modules: ["vue3-carousel-nuxt", "@formkit/nuxt"],
  formkit: {
    autoImport: true,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      emailjs: "1BaZwEOc51HCUmYi-",
      adminPassword: "Lucifer6869@6869",
    },
  },
});