<script>

export default {
  data() {
    return {
      name: 'Options API',
      status: 'active',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      link: 'https://google.com',
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active'){this.status = 'inactive'}
      else if (this.status === 'inactive'){this.status = 'pending'}
      else{this.status = 'active'}
    }
  }
}

</script>

<template>
  <h1>{{ name }}</h1>
  <ul>
    <li v-for="item in tasks">{{ item }}</li>
  </ul>
  <p v-if="status === 'active'">Status: You are active</p>
  <p v-else-if="status === 'pending'">Status: You are pending</p> 
  <p v-else>Status: You are inactive</p>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
   <button @click="toggleStatus">Change Status</button>
  <!-- <a v-bind:href="link">V-Bind Click ME</a> -->
  <a :href="link" target="_blank">click me</a>
</template>

// scoped yazildiginda bu sayfadaki kod sadece bu sayfadaki elementlere etki eder.
<style scoped>
h1 {
  color: green;
  font-weight: 700;
}
p{
  color: red;
  font-weight: 600;
}
a{
  display: block;
}
</style>