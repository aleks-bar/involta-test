// types/nuxt-app.d.ts
import type { ApiInstance } from '../plugins/api'

declare module 'nuxt/app' {
  interface NuxtApp {
    $api: ApiInstance
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: ApiInstance
  }
}
