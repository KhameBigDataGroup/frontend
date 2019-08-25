<template>
    <b-card
            header="Transactions"
            header-tag="header"
    >
        <b-card-text>
            <div class="text-center" v-if="loading">
                <b-spinner variant="warning" type="grow" label="Loading"></b-spinner>
            </div>
            <div v-if="!loading">
                <ul>
                    <li v-for="transaction in transactions" :key="transaction.hash">
                        <Transaction :transaction="transaction" />
                    </li>
                </ul>
            </div>

        </b-card-text>
    </b-card>
</template>

<script>
    import {SITE_URL} from "../../config";
    import Transaction from "./Transaction";

    export default {
        name: "Transactions",
        components: {Transaction},
        props: {
            hash: null,
        },
        data() {
            return {
                loading: true,
                transactions: null,
            }
        }, mounted: function () {
            this.fetchBlock();
        },
        methods: {
            fetchBlock: function () {
                fetch(`${SITE_URL}/bitcoin/get_transactions/${this.hash}`).then(x => x.json())
                    .then(data => {
                        this.transactions = data.transactions;
                        this.loading = false;
                    }).catch(err => {
                    if (err.status === 404) {
                        // TODO: ...
                    }
                    this.loading = false;
                    console.log(err);
                });
            }
        },
    }
</script>

<style scoped>

</style>