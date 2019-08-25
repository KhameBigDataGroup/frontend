<template>
    <b-table striped hover :items="items"
             :fields="['height', 'age', 'transactions', 'size', 'average_fee', 'weight', 'show_block']">
        <template slot="[show_block]" slot-scope="row">
            <b-button size="sm" class="mr-2" :to="`/bitcoin/block/${row.item.hash}`">
                Details
            </b-button>
        </template>
        <template slot="[age]" slot-scope="row">
            {{parseInt(row.item.age / 60)}} minutes
        </template>

    </b-table>
</template>

<script>
    export default {
        name: "ListOfBitcoinBlocks",
        props: {
            items: null,
        }
    }
</script>

<style scoped>

</style>