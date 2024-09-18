<script setup>
import { defineProps,ref,computed } from 'vue';
import CardContainer from './CardContainer.vue';

const props =defineProps({
    job: {
        type: Object,
        default:{
            title: "Card Title",
            description: "Card Body",
            type: "Job Type",
            location: "Job Location",
            salary: "Job salary",
        }
    },
    CTA_btn: {
        type: String,
        default: "Apply Now"
    }
})

const showFullDescription = ref(false);

const toggleDescription = () => {
    showFullDescription.value = !showFullDescription.value;
}

const truncatedDescription = computed(() => {
    let description = props.job.description;
    
    if (!showFullDescription.value){
        description = description.substring(0, 90) + "...";
    }
    return description;
})

</script>

<template>
    <CardContainer>
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
                <div>{{ truncatedDescription }}</div>
                <button @click="toggleDescription" class="text-green-500">
                    {{ showFullDescription ? "Show Less" : "Show More" }}
                </button>
            </div>

            <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="pi pi-map-marker"></i>
                    {{ job.location }}
                </div>
                <RouterLink :to="'/jobs/' + job.id"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    {{ CTA_btn }}
                </RouterLink>
            </div>
        </div>
    </CardContainer>
</template>