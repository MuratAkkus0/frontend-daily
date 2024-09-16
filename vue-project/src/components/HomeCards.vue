<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    card: {
        type: Object,
        default: {
            title: "Job Title",
            description: "Job Description",
            CTA_btn: "CTA Button"
        }
    },
    bg: {
        type: String,
        default: "bg-gray-100"
    },
    toLink: {
        type:String,
        default: "/jobs"
    }
})
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <h2 class="text-2xl font-bold">{{ card.title }}</h2>
        <p class="mt-2 mb-4">
            {{ card.description }}
        </p>
        <RouterLink :to="toLink" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            {{ card.CTA_btn }}
        </RouterLink>
    </div>
</template>