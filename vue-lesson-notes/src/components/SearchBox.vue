<script setup>
import { onMounted, ref,computed, reactive } from 'vue';
let searchWord = ref('');
let state = reactive({
    jsonData: [],
    isLoading: true
});
const getData = onMounted(async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            state.jsonData = data.slice(0, 10);
        })
})

const filteredData =
    computed(() => {
        let result =state.jsonData.filter(item=>item.title.toLowerCase().match(searchWord.value.toLocaleLowerCase()));
        return result;
        
})

</script>

<template>
    <input v-model="searchWord" type="text" placeholder="Search">
    <div>{{ searchWord }}</div>
    <div class="results">
        <p v-for="item in filteredData" >{{item.title}}</p>
    </div>
</template>