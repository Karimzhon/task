import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router'


const app = createApp(App).use(router);

app.use(VueRouter).mount('#app')

import "bootstrap/dist/js/bootstrap.js"