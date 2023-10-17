import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // App related configurations
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'pixeltronic.dev',
      meta: [
        { name: 'description', content: 'Nuxt3, Vue3, Quasar and etc' },
        { name: 'keywords', content: 'vuejs,nuxt,quasar,pixeltronic,pixeltronic-frontend,vue3,nuxt3' },
      ],
    },
  },

  // Styles
  css: ['@/assets/css/main.scss'],

  // Modules
  modules: [
    [
      'nuxt-quasar-ui',
      {
        sassVariables: '/assets/css/quasar.variables.scss',
        animations: 'all',
        plugins: ['Notify', 'Screen'],
        boot: ['capacitor'],
        extras: {
          fontIcons: ['material-icons'],
        },
        config: {
          capacitor: {
            iosStatusBarPadding: true,
            backButtonExit: false,
            backButton: true,
            hideSplashscreen: false,
            appName: 'pixeltronic',
            version: '0.0.1',
          },
          dark: true,
        },
      },
    ],
    '@nuxtjs/eslint-module',
    '@nuxt/devtools',
    '@pinia/nuxt',
    'nuxt-mongoose',
    '@nuxtjs/supabase',
    '@nuxtjs/strapi',
  ],

  // Configurations for mongoose
  mongoose: {
    uri: `mongodb+srv://${process.env.NUXT_DB_USERNAME}:${process.env.NUXT_DB_PASSWORD}@${process.env.NUXT_DB_CLUSTER}`,
    options: {},
    modelsDir: 'models',
  },

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: 'https://nmecdalnaljvyjttgfjc.supabase.co/auth/v1/callback',
    },
  },

  // Configurations for strapi
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },

  // Components
  components: ['~/components'],

  // TypeScript
  typescript: { strict: true },

  // Imports
  imports: { dirs: ['./stores'] },

  // Pinia store
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },

  // Development configurations
  devtools: { enabled: true },
  sourcemap: {
    server: true,
    client: true,
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_API_URL || '',
      cookieName: process.env.NUXT_COOKIE_NAME,
    },
    encryptionKey: process.env.NUXT_ENCRYPTION_KEY,
    dbCluster: process.env.NUXT_DB_CLUSTER,
    dbUserName: process.env.NUXT_DB_USERNAME,
    dbPassword: process.env.NUXT_DB_PASSWORD,
  },
});
