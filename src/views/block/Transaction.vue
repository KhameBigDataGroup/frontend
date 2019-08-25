<template>
    <b-card
            :header="transaction.hash"
            header-tag="header"
    >
        <b-card-text>
            <b-row>
                <b-col>
                    <b-card
                            sub-title="In"
                    >
                        <b-card-text>
                            <ul>
                                <li v-for="item in transaction.vin" v-bind:key="item.coinbase + item.txid">
                                    {{item.coinbase?item.coinbase:item.txid.substring(0, 40)}}
                                </li>
                            </ul>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                            sub-title="Out"
                    >
                        <b-card-text>
                            <ul>
                                <li v-for="item in transaction.vout" v-bind:key="item.n">
                                    {{item.scriptPubKey.addresses.join(', ').substring(0, 40)}}
                                    <b-badge>{{Math.round(item.value*10000) / 10000}}</b-badge>
                                </li>
                            </ul>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: "Transaction",
        props: {
            transaction: null
        }
    }
</script>

<style scoped>

</style>