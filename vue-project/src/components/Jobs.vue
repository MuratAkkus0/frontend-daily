<script setup>
import { ref, defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import verticalCard from '@/components/VerticalCard.vue';
import jobData from '@/jobs.json';

defineProps({
    limit:Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const jobs = ref(jobData);

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <verticalCard v-for="job in jobs.jobs.slice(0,limit || jobs.jobs.length)"  :job="job" :key="job.id" />
            </div>
        </div>
    </section>

    <section v-if="showButton===true" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>

<style scoped></style>