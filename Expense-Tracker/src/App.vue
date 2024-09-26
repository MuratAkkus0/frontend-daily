<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <IncomeExpenses :income="+income" :expense="+expense" />
    <TransactionList @transactionDeleted="deleteTransaction($event)" :transactions="transactions.data" />
    <AddTransaction :transactions="transactions.data" @transactionSubmitted="addTransaction($event)" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Balance from '@/components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { ref, computed, onMounted } from 'vue';

export default {
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction,
  },
  setup() {
    const transactions = ref({ data: [] });
    const loading = ref(false);

    // Fetch Transactions on Mount
    const fetchTransactions = async () => {
      loading.value = true;
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        transactions.value.data = data;
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchTransactions);

    // Compute Total, Income, Expense
    const total = computed(() => {
      return transactions.value.data
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2);
    });

    const income = computed(() => {
      return transactions.value.data
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2);
    });

    const expense = computed(() => {
      return transactions.value.data
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, curr) => acc + curr.amount, 0)
        .toFixed(2);
    });

    // Add Transaction
    const addTransaction = async (form) => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        };
        const response = await fetch('/api/data', options);
        const data = await response.json();
        transactions.value.data.push(data);
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    };

    // Delete Transaction
    const deleteTransaction = async (id) => {
      if (!id) {
        console.error('Invalid transaction ID');
        return;
      }

      try {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(`/api/data/${id}`, options);
        if (response.ok) {
          transactions.value.data = transactions.value.data.filter(
            (transaction) => transaction.id !== id
          );
        } else {
          throw new Error('Failed to delete transaction');
        }
      } catch (error) {
        console.error('Error deleting transaction:', error);
      }
    };

    return {
      transactions,
      total,
      income,
      expense,
      addTransaction,
      deleteTransaction,
      loading,
    };
  },
};
</script>
<style scoped></style>
