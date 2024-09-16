<script setup>
import {ref, onMounted} from 'vue';
// export default {
//   setup() {
    const name = ref('Composition API');
    const status = ref('active');
    const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
    const link = ref('https://google.com');
    const newTask = ref('');

    const addNewTask = () => {
      console.log('newTask', newTask.value);
      
      if (newTask.value.trim() !== ''){
        tasks.value.push(newTask.value);
        newTask.value = '';
      }
    }
    const deleteTask = (index) => {
      console.log('index', index);
      tasks.value.splice(index,1);
    }
    const toggleStatus = () => {
      if (status.value === 'active'){status.value = 'inactive'}
      else if (status.value === 'inactive'){status.value = 'pending'}
      else{status.value = 'active'}
    }

    onMounted(async function(){
      console.log('onMounted');
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      tasks.value.push(...(data.slice(0,10).map(task => task.title)))
      
    })

//     return {
//       name,   // Script tag inin icine setup ekleyince yoruma aldigim kodlar gereksiz olur.
//       status, //composition Api kullanilirken degiskenler ref () ile sarilir.
//       tasks,
//       link,
//       toggleStatus
//     }
//   }
// }

</script>

<template>
  <h1>{{ name }}</h1>
  <ul>
    <li v-for="(item, index) in tasks" :key="item">
    <span>
      {{ item }}
    </span>
    <button @click="deleteTask(index)" type="button">X</button>
  </li>
  </ul>
  <p v-if="status === 'active'">Status: You are active</p>
  <p v-else-if="status === 'pending'">Status: You are pending</p> 
  <p v-else>Status: You are inactive</p>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
   <button @click="toggleStatus">Change Status</button>
  <!-- <a v-bind:href="link">V-Bind Click ME</a> -->
  <a :href="link" target="_blank">click me</a>

  <form @submit.prevent="addNewTask">
    <label for="newTask">Add New Task</label>
    <input @enter="addNewTask" type="text" name="newTask" id="newTaskInput" v-model="newTask">
    <button type="submit">submit</button>
  </form>

</template>

<style scoped>
h1 {
  color: green;
  font-weight: 700;
}
p{
  color: red;
  font-weight: 600;
}
*{
  /* display: block; */
  margin: 1rem 0;
}
</style>