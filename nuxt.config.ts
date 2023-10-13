import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  title: 'pixeltronic.dev',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  $production: {
    routeRules: {
      '/**': { isr: true },
    },
  },
  $development: {
    //
  },
  runtimeConfig: {
    public: {
      apiURL: 'https://pixeltronic.info',
    },
    encryptionKey: '',
    gitHubToken: '',
  },
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui', '@nuxtjs/eslint-module'],
  axios: {
    baseURL: 'https://pixeltronic.info',
  },
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  quasar: {
    boot: ['capacitor'],
    extras: {
      font: 'roboto-font',
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
        primary: '#35869c',
        secondary: '#f1f9fa',
        accent: '#5ce0bc',

        dark: '#212121',
        'dark-page': '#616161',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      },
    },
    iconSet: 'material-icons', // Quasar icon set
    // lang: 'en-US', // Quasar language pack
    // components: [],
    // directives: [],

    // Quasar plugins
    plugins: ['LocalStorage', 'Dark'],
  },
  animations: 'all',
  capacitor: {
    hideSplashscreen: false,
    // capacitorCliPreparationParams: ['sync', ctx.targetName],
    appName: 'pixeltronic',
    version: '0.0.1',
  },
});
