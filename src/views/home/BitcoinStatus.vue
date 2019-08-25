<template>
    <b-card
            header="Bitcoin Status"
            header-tag="header"
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
    >
        <b-card-text>
            <b-row>
                <b-col>
                    <b-card sub-title="Last Block Height">
                        <b-card-text :style="{fontSize: '2em'}">
                            <AnimatedNumber :number="lastBlockHeight" v-show="!loading"/>
                            <b-spinner variant="warning" type="grow" label="Loading" v-if="loading"></b-spinner>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Difficulty">
                        <b-card-text :style="{fontSize: '2em'}">
                            <small :style="{fontSize: '0.7em'}">
                                <AnimatedNumber :number="difficulty" v-show="!loading"/>
                                <b-spinner variant="warning" type="grow" label="Loading" v-if="loading"></b-spinner>
                            </small>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Total Transactions">
                        <b-card-text :style="{fontSize: '2em'}">
                            <AnimatedNumber :number="totalTransactions" v-show="!loading"/>
                            <b-spinner variant="warning" type="grow" label="Loading" v-if="loading"></b-spinner>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
    import {SITE_URL} from "../../config";
    import AnimatedNumber from "../../components/util/AnimatedNumber";

    export default {
        name: "BitcoinStatus",
        components: {AnimatedNumber},
        data: () => {
            return {
                loading: true,
                lastBlockHeight: 0,
                difficulty: 0,
                totalTransactions: 0,
                timer: '',
            }
        },
        created: function () {

            this.fetchCharts();
            this.timer = setInterval(this.fetchCharts, 60000)

        },
        methods: {
            fetchCharts: function () {
                fetch(`${SITE_URL}/bitcoin/get_status`).then(x => x.json())
                    .then(data => {
                        this.lastBlockHeight = data.blocks;
                        this.difficulty = data.difficulty;
                        this.totalTransactions = data.txcount;
                        this.loading = false;
                    }).catch(err => {
                    console.log(err);
                });
            },
            cancelAutoUpdate: function () {
                clearInterval(this.timer)
            }

        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>

</style>