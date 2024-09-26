<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="onSubmit" id="form">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="form.text" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br />
        (negative - expense, positive - income)</label>
      <input v-model="form.amount" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { useToast } from 'vue-toastification';
export default defineComponent({
  emits: ['transactionSubmitted'],
  props: {
    transactions: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const form = reactive({
      text: '',
      amount: 0
    })
    
    // const emit = defineEmits(['transactionSubmitted']);
    function onSubmit() {
      if (!form.text || !form.amount) {
        useToast().error('Text and Amount are required!');
        return
      }
      const newTransaction = {
        id: generateUniqueId(),
        text: form.text,
        amount: +form.amount
      }
      useToast().success('Transaction added successfully!');
      context.emit('transactionSubmitted', newTransaction);
      form.text = '';
      form.amount = 0;
      console.log(newTransaction)

    }
    function generateUniqueId() {
      let id = Math.floor(Math.random() * 1000000000);
      props.transactions.forEach((transaction) => {
        if (+transaction.id === id) {
          generateUniqueId();
          return;
        }
      })
      return String(id);
    }

    return {
      onSubmit,
      form
    }
  }
})
</script>