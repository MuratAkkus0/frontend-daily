<script setup>
import DynamicComp_1 from './DynamicComp_1.vue';
import DynamicComp_2 from './DynamicComp_2.vue';
import { ref,defineComponent, onUpdated, shallowRef } from 'vue';

const componentsMap = {
    form1: DynamicComp_1,
    form2: DynamicComp_2
}

let currentComponent = shallowRef(componentsMap.form1);

onUpdated(() => {
    
})

/*

Event Modifiers lar oldugu gibi v-model mofifierslarda vardir. 
v-model.lazy = inputtan cikilinca ilgili modeli günceller. (form/input modifiers)
.

*/

</script>

<template>
    <h1>Dynamic Components</h1>
    <!-- keep-alive kullanildiginda iki componentin degerlerini tutar. iki component de cachelenir -->
    <keep-alive>
        <component :is="currentComponent" />
    </keep-alive>
    <button @click="currentComponent=componentsMap.form1">Show Comp 1</button>
    <button @click="currentComponent=componentsMap.form2">Show Comp 2</button>
</template>