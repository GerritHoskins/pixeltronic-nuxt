import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  sourcemap: {
    server: true,
    client: true,
  },

  css: ['@/assets/css/main.scss'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'pixeltronic.dev',
      meta: [
        {
          name: 'description',
          content: 'Nuxt3, Vue3, Quasar and etc',
        },
        { name: 'keywords', content: 'vuejs,nuxt,quasar,pixeltronic,pixeltronic-frontend,vue3,nuxt3' },
      ],
    },
  },

  modules: [
    [
      'nuxt-quasar-ui',
      {
        sassVariables: '/assets/css/quasar.variables.scss',
        animations: 'all',
        plugins: ['Notify', 'LocalStorage', 'Screen'],
        config: {
          dark: true,
        },
      },
    ],
    '@nuxtjs/eslint-module',
    '@nuxt/devtools',
    '@pinia/nuxt',
    'nuxt-mongoose',
  ],
  mongoose: {
    uri: `mongodb+srv://${process.env.NUXT_DB_USERNAME}:${process.env.NUXT_DB_PASSWORD}@${process.env.NUXT_DB_CLUSTER}`,
    options: {},
    modelsDir: 'models',
  },

  components: [/*{ path: '~/components/icons', pathPrefix: false },*/ '~/components'],
  devtools: { enabled: true },

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    public: {
      apiURL: 'https://pixeltronic.info',
    },
    encryptionKey: 'ptronic',
    dbCluster: 'atlascluster.gim7y0m.mongodb.net',
    dbUserName: 'pixeltronic',
    dbPassword: '996047521',
  },

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  /* quasar: {
      //   css: ['~/assets/css/main.css', '~/assets/css/quasar.sass'],
      boot: ['capacitor'],
      extras: {
        fontIcons: ['material-icons'],
      },
      config: {
        capacitor: {
          iosStatusBarPadding: true, // add the dynamic top padding on iOS mobile devices
          // Quasar handles app exit on mobile phone back button.
          backButtonExit: false,

          // On the other hand, the following completely
          // disables Quasar's back button management.
          backButton: true,
        },
        dark: true, // or Boolean true/false
        brand: {
          primary: '#5ce0bc',
          secondary: '#324958',
          accent: '#616161',

          dark: '#616161',
          'dark-page': '#616161',

          positive: '#21BA45',
          negative: '#C10015',
          info: '#31CCEC',
          warning: '#F2C037',
          h1: '1rem',
        },
      },
      iconSet: 'material-icons',
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ['Dark', 'LocalStorage'],
    },
    animations: 'all',
    capacitor: {
      hideSplashscreen: false,
      // capacitorCliPreparationParams: ['sync', ctx.targetName],
      appName: 'pixeltronic',
      version: '0.0.1',
    },*/
});
