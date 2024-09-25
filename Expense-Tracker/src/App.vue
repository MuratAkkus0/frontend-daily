<template>
  <Header />
  <div class="container">
    <Balance :total="+total"/>
    <IncomeExpenses :income="+income" :expense="+expense" />
    <TransactionList @transactionDeleted="deleteTransaction($event)" :transactions="transactions" />
    <AddTransaction :transactions="transactions" @transactionSubmitted="addTransaction($event)"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Balance from '@/components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

import { ref, computed, onMounted} from 'vue';

export default {
  setup() {
    const transactions = ref([
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 1000 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]);
    // Get Total Amount
    const total = computed(
      () => {
        return transactions.value.reduce((acc, curr) => {
          return acc += curr.amount
        },0)
        .toFixed(2)
      });

    // Get Income Amount  
    const income = computed(
      () => {
        return transactions.value
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, curr) => {
          return acc += curr.amount
        },0)
        .toFixed(2)
      });

    // Get Expense Amount
    const expense = computed(
      () => {
        return transactions.value
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, curr) => {
          return acc + curr.amount
        },0)
        .toFixed(2)
      });

    const addTransaction = (form) => {
      transactions.value.push(form)
    }

    const deleteTransaction = (id) => {
      transactions.value.forEach((transaction,index) => {
        if (+transaction.id === id) {transactions.value.splice(index, 1)}
      });
    }

    return {
      transactions,
      total,
      income,
      expense,
      addTransaction,
      deleteTransaction
    }
  },
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  }
}
</script>
<style scoped></style>
