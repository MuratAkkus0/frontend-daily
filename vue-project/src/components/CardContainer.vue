<script setup>
import { defineProps } from 'vue';

defineProps({
    bg: {
        type: String,
        default: "bg-white"
    }
})

// Bu Sekilde Kendi Elemanini Tanimlayabilirsin. Bu eleman normal HTML elemani gibi acilip 
//kapatilarak kullanilir. Bunu belirtmek icin <slot></slot> kullaniyoruz.
</script>

<template>
    <div :class="`${bg} rounded-xl shadow-md relative`">
        <slot></slot>
    </div>
</template>