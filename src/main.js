import { createApp } from 'vue'
import './style.css'
import store from './store'
import router from './router'
import App from './App.vue'
import * as filters from './filters'

const app = createApp(App);

app.use(router).use(store).mount('#app');

app.config.globalProperties.$filters = filters
