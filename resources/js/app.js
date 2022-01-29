import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import Layout from '@/Shared/Layout'

InertiaProgress.init()

createInertiaApp({
  resolve: (name) => {
    let page = require(`./Pages/${name}`).default

    if (page.layout === undefined) {
      page.layout = Layout
    }

    return page
  },
  title: (title) => `${title} - Ping CRM`,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
