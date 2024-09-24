<script setup>

import { onMounted } from 'vue';

/* v-model , v-for gibi kendi directivini olusturmana saglar fakat gercekten ihtiyac duymadikca kullanma programi gereksiz yavaslatabilirsin. */

const vRainbow = {
    mounted: (el) => {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
    }
}
/*
app.directive('color', (el, binding) => {
  // this will be called for both `mounted` and `updated`
  el.style.color = binding.value
})
*/ 


</script>

<template>
    <h1 v-for="i in 5" v-rainbow>Custom Directives</h1>
</template>