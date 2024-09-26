<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id"
            :class="transaction.amount < 0 ? 'minus' : 'plus'">{{ transaction.text }} <span>${{transaction.amount}}</span>
        <button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button></li>
    </ul>
</template>

<script>
export default {
    emits: ['transactionDeleted'],
    props: {
        transactions: {
            type: Object,
            required: true
        }
    },
    setup(props,context) {
       function deleteTransaction(id) {
          context.emit('transactionDeleted', id)
       }


       return {
           deleteTransaction
       }
    }

}
</script>