import { createApp } from 'vue'
import App from './App.vue'
import './reset.css'
import './index.css'
import { router } from './routers/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
