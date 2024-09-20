<script setup>
import { reactive } from 'vue';

/*
--- v-if yapisi ile v-show yapisi arasindaki fark, v-show kosul saglansa da saglanmasada elemani HTML e ekler ve o elemana inline style olarak display none verir. v-if yapisi da eger kosul saglaniyorsa elemani HTML yapisina ekler , kosul saglanmiyorsa eleman HTML e eklenmez. Yani incele denince htmlde görünmez.
*/

const isSuccessful = reactive({
    error:false
})

</script>

<template>
    <p v-if="isSuccessful.error">Hata!</p>

    <p v-show="isSuccessful.error">v-show : Hata</p>

    <button v-on:click="isSuccessful.error = !isSuccessful.error">Change Process Status</button>
</template>
