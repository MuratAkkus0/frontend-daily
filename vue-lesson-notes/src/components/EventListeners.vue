<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: 'ali',
  age: ''
})

console.log(formData['name'])

const getName = ()=>{
  console.log(formData.name)
}
const getAge = ()=>{
  console.log(formData.age)
}

/*
** Event Listener Modifiers = örn/ v-on:keyup.enter.alt => sadece eger enter + alt tusu basiliysa olay tetiklenir.

** v-on:click.right.prevent = "" => Sadece sag tiklamada olayi tetiklenir ve prevent ile secenekler sekmesinin de acilmasi engellenir.

** v-on:mousemove.passive = "" => tarayiciya olayin default davranisinin  engellenmeyecegini yani prevent eklenmeyecegini bildirir. Bu sayede tarayici sürekli tetiklenen olaylarda daha performansli calisir. Fakat passive ekliyken prevent özelligi calismaz!.

computed => Normalde VueJs tanimlanan bir parametre veya degiskenin degeri degistiginde diger degiskenleri de kontrol eder ve ilgili oldugunu düsündügü diger fonksiyonlari tetikler. Computed () fonksiyonu kullanildiginda ise sadece degisen parametreyi kontrol eder ve onunla alakali olan fonksiyonu tetikler.
*/

</script>

<template>
  <form >
    <p>{{ formData.name }}</p>
    <label for="name">Name :</label>
    <input v-model="formData.name"  v-on:keyup.enter.alt="getName" type="text" name="name" id="name"></input>
    <br/>
    <p>{{ formData.age }}</p>
    <label for="age">Age :</label> 
    <input v-model="formData.age"  v-on:keyup="getAge" type="text" name="age"></input>
    
  </form>
  </template> 