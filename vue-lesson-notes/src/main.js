import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue';
import router from './routes'

const app = createApp(App);

// Bu sekilde globale kendi filtreni tanimlayabilirsin.
// $filters.UpperCaseFilter(value) seklindecagirilip kullanilir.
app.config.globalProperties.$filters = {
    UpperCaseFilter(value) {
        return value.toUpperCase();
    }
}

app.component('GlobalComp', {
    template: `
    <p>
        Hallo {{ name }}
    </p>
    <button @click="changeName">Change Name</button>
    `,

    setup() {
        // name reaktif hale getiriliyor
        let name = ref(true);
        
        // changeName fonksiyonu setup içinde tanımlanıyor
        const changeName = () => {
            name.value = !name.value; // 'name' değerini tersine çeviriyoruz
        };
        
        // reaktif değişkenler ve fonksiyon geri döndürülüyor
        return { name, changeName };
    }
});

app.use(router);
app.mount('#app')

/*
Vue JS bu app alanlari instance diye gecer ve birden fazla app olusturabilirsin.
createApp() methodu buna izin verir . Baska bir app icindeki bir özellige müdahale etmek icin o appi esitledigin degisken adini kullanman yeterli. örn/ app.name = "ali"
gibi olabilir tabi app instance i nin bu degiskeni olmasi gerekli.

app.component = Global Definition olarak gecer ve kendi html elementini tanimlayabilirsin.
app.component("element-one", {
    template: `
    <div>
        <h1>Element One {{name}}</h1>
    </div>
    `
    const changeName = () => {
        this.name = "ali"
    }
})


*/
// Ikinci Global Component Tanimlama Yöntemi
const GlobalComp2 = {
    template: `
    <p>
        Hallo {{ name }}
    </p>
    <button @click="changeName">Change Name</button>
    `,

    setup() {
        // name reaktif hale getiriliyor
        let name = ref(true);
        
        // changeName fonksiyonu setup içinde tanımlanıyor
        const changeName = () => {
            name.value = !name.value; // 'name' değerini tersine çeviriyoruz
        };
        
        // reaktif değişkenler ve fonksiyon geri döndürülüyor
        return { name, changeName };
    }
}

const app2 = createApp({
    template: '<App2/><GlobalComp2/>',
    components:{
        GlobalComp2,
        App2
    }
});

app2.mount('#app2')