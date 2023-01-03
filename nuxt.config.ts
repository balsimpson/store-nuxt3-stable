// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'My Blog',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },
  css: ["~/assets/css/styles.css"],
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    },
    private: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    }
  },
})
