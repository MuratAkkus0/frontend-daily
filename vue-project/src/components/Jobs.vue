<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import verticalCard from '@/components/VerticalCard.vue';
import axios from 'axios';
import pulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const state = reactive({
    jobs: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs');
        state.jobs = await response.data;
    } catch (error) {
        console.log('Error while fetching jobs:', error);
        state.jobs = [];
    } finally {
        state.isLoading = false;
    }
})


</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <!-- Loading Spinner -->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <pulseLoader />
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <verticalCard v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :job="job" :key="job.id" />
            </div>
        </div>
    </section>

    <section v-if="showButton === true" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>

<style scoped></style>