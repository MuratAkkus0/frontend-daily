<script setup>
import { reactive, computed } from 'vue';

const formData = reactive({
    a: 0,
    b: 0,
    c: 0,
    d: 0
})

// Burada ise Fonksiyon sadece onu gercekten alakadar eden bir deger degisince tetiklenir . örnegin sonuca a degiskenini bir islem yapmadan koysak bile a++ butonuna basinca bu fonksiyon tetiklenir.
const getResult = computed(() => {
    console.log('calisti')
    return "naber" + formData.a ;
})
/* 
--- Bu fonksiyon computed() fonksiyonunun icinde olmadigi icin assagidaki 2 buton da bu fonksiyonla bagli olmamasina ragmen hatta baska butona tiklanmasina ragmen her tiklandiginda bu fonksiyon da calisir. Cünkü VueJs assagidaki herhangi bir parametrelerinin degismesinin bu fonksiyonun sonucuna da etki edebilecegini düsünerek bu fonksiyonu da tekrar calistirarak degeri günceller .
*/

const getResult2 = () => {
    console.log('copmuted olmayan calisti')
    return "naber";
}

const styles = reactive({
    // color: 'red',
    // border: '1px solid black'
});

const classes = reactive({
    deneme: false,
    deneme2:true
})

</script>

<template>
    <h2>Computed Kullanildi</h2>
    <button @click="formData.a++">a++</button>
    <button @click="formData.b++">b++</button>
    <p>{{ formData.a }} ve {{ formData.b }} sonuc = {{ getResult }}</p>

    <h2 :style="styles" :class="classes" >Computed Kullanilmadi</h2>
    <button @click="formData.c++">a++</button>
    <button @click="formData.d++">b++</button>
    <p>{{ formData.c }} ve {{ formData.d }} sonuc = {{ getResult2() }} </p>
</template>

<style scoped>
.deneme{
    color: blue;
    border: 1px solid black;
}
.deneme2{
    color: red;
    border-style: dotted;
}
</style>