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
  build: {
    transpile: ['vue-toastification']
  },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
      CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN,
      OPENAI_KEY: process.env.OPENAI_KEY,
    },
    private: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
      CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      // WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN,
      // OPENAI_KEY: process.env.OPENAI_KEY
    }
  },
})
