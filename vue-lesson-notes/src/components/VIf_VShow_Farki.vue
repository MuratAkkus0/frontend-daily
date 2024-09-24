<script setup>
import { reactive,defineProps,defineEmits } from 'vue';

/*
--- v-if yapisi ile v-show yapisi arasindaki fark, v-show kosul saglansa da saglanmasada elemani HTML e ekler ve o elemana inline style olarak display none verir. v-if yapisi da eger kosul saglaniyorsa elemani HTML yapisina ekler , kosul saglanmiyorsa eleman HTML e eklenmez. Yani incele denince htmlde görünmez.
*/


defineProps({
    btnText:{
        type:String,
        default:"Change"
    }
})

const emit = defineEmits(['deneme'])


const changeBtnText = function() {
    emit('deneme',"Murat")
}

const isSuccessful = reactive({
    error:true
})

</script>

<template>
    <p v-if="isSuccessful.error" v-on:click="changeBtnText">Hata!</p>

    <p v-show="isSuccessful.error">v-show : Hata</p>

    <button v-on:click="isSuccessful.error = !isSuccessful.error">{{btnText}}</button>
</template>
