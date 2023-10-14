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
      // apiURL: 'https://pixeltronic.info',
      apiURL: 'http://localhost:9000',
    },
    encryptionKey: 'ptronic',
  },
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui', '@nuxtjs/eslint-module'],
  css: ['~/assets/css/main.css', '~/assets/css/quasar.variables.scss'],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  quasar: {
    css: ['~/assets/css/main.css'],
    boot: ['capacitor'],
    extras: {
      font: '',
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
    plugins: ['Dark'],
  },
  animations: 'all',
  capacitor: {
    hideSplashscreen: false,
    // capacitorCliPreparationParams: ['sync', ctx.targetName],
    appName: 'pixeltronic',
    version: '0.0.1',
  },
});
