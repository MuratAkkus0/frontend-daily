<script setup>
import HomeCards from './HomeCards.vue';
</script>

<template>
    <section class="py-4">
        <div class="container-xl lg:container m-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <HomeCards :card="{
                    title:'For Developers',
                    description:'Browse our Vue jobs and start your career today!',
                    CTA_btn:'Browse Jobs'
                }" />
                <HomeCards bg="bg-green-100" toLink="/jobs/add" :card="{
                    title:'For Employers',
                    description:'List your job to find perfect developer for the role!',
                    CTA_btn:'Add Jobs'
                }" />
            </div>
        </div>
    </section>

</template>

<style scoped></style>