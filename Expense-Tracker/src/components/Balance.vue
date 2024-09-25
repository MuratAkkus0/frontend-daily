<template>
    <h4>Your Balance</h4>
    <h1 id="balance">${{total}}</h1>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            required: true
        }
    },
    setup() {
        
    }

}
</script>