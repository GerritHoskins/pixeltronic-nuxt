import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["quasar"]?: typeof import("nuxt-quasar-ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["eslint"]?: typeof import("@nuxtjs/eslint-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-quasar-ui", Exclude<NuxtConfig["quasar"], boolean>] | ["@nuxtjs/eslint-module", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   encryptionKey: string,

   gitHubToken: string,
  }
  interface PublicRuntimeConfig {
   apiURL: string,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }