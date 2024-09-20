import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue';

const app = createApp(App);

app.mount('#app')

/*
Vue JS bu app alanlari instance diye gecer ve birden fazla app olusturabilirsin.
createApp() methodu buna izin verir . Baska bir app icindeki bir özellige müdahale etmek icin o appi esitledigin degisken adini kullanman yeterli. örn/ app.name = "ali"
gibi olabilir tabi app instance i nin bu degiskeni olmasi gerekli.
*/

const app2 = createApp(App2);

app2.mount('#app2')