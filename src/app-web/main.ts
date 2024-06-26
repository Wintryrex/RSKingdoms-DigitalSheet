import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import jsonFileReader from '@/util/json-file-reader'

import App from '@/App.vue'
import router from '@/router'
import type Settings from '@/settings/settings.ts'

const app = createApp(App)

const settings = await jsonFileReader<Settings>('../../settings/settings.json')

if (settings != undefined) {
  app.provide('settings', settings)
} else {
  throw new Error('Could not read config file')
}

app.use(createPinia())
app.use(router)

app.mount('#app')
