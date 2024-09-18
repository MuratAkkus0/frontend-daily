<script setup>
import Hero from '@/components/Hero.vue';
import Developers from "@/components/Developers.vue";
import Jobs from "@/components/Jobs.vue";
</script>

<template>
    <Hero />
    <Developers />
    <Jobs :limit="3" :showButton="true" />
</template>