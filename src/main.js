import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosInstance from './services/axios'

let app = createApp(App)

app.config.globalProperties.$axios = axiosInstance;

app.use(router).mount('#app')