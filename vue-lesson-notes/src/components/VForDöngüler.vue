<script setup>
import { reactive } from 'vue';

const actors = reactive([
    { name: 'Robert Downey Jr.', age: 55, id: 1 },
    { name: 'Tom Hanks', age: 47 , id: 2},
    { name: 'Will Smith', age: 50 , id: 3},
    { name: 'Denzel Washington', age: 58 , id: 4},
    { name: 'Tom Cruise', age: 48 , id: 5},
    { name: 'Samuel L. Jackson', age: 51 , id: 6},
])
</script>

<template >
    <div style="border:1px solid black" v-for="(actor,index) in actors" >
        <p v-for="actorProps in actor">{{ actorProps }}</p>
    </div>
</template>