import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component(VueCountdown.name, VueCountdown);
