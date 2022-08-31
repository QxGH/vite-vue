import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const vue = createApp(App);
vue.use(router)
vue.use(ElementPlus)
vue.mount('#app')