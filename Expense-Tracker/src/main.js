import { createApp } from 'vue';
import Toast from 'vue-toastification';
import './assets/main.css';
import 'vue-toastification/dist/index.css';
import App from './App.vue';

const app = createApp(App)

const toastOptions = {
// specific options for the toast
}

app.use(Toast, toastOptions);
app.mount('#app')
