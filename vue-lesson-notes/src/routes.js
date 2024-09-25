import {createRouter, createWebHashHistory } from 'vue-router';
import ComputedDetails_DynamicStyles from './components/ComputedDetails_DynamicStyles.vue';
import EventListeners from './components/EventListeners.vue';
import VIf_VShow_Farki from './components/VIf_VShow_Farki.vue';
import VForDöngüler from './components/VForDöngüler.vue';
import DynamicComponents from './components/DynamicComponents.vue';
import CustomDirectives from './components/CustomDirectives.vue';
import searchBox from './components/SearchBox.vue';

// Bu Hash history, birde normal history yöntemi var. Hash History yönteminde her ne kadar yeni sayfa aciliyor gibi görünsede aslinda sayfanin assagisina scroll ediyor gibi bir sey oluyor ve vue bize bunu sanki yeni sayfa gibi gösteriyor. Ancak google bunlari sayfa olarak tanimiyor dolayisiyla HAsh historiyle yapilan route islemi SEO problemleri cikariyor.
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: CustomDirectives
        },
        {
            path: '/ekle',
            name: 'ekle',
            component: searchBox
        }
    ]
})

export default router;
/*
Bu da normal Histoy yöntemi direk sayfalama olusturur.

import {createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: CustomDirectives
        }
    ]
})

export default router;
*/