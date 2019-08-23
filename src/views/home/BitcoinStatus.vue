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
                            <AnimatedNumber :number="lastBlockHeight" />
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Total Transactions">
                        <b-card-text :style="{fontSize: '2em'}">
                            <AnimatedNumber :number="totalTransactions" />
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
                lastBlockHeight: 0,
                totalTransactions: 0,
                timer: '',
            }
        },
        created: function () {

            this.fetchEventsList();
            this.timer = setInterval(this.fetchEventsList, 10000)

        },
        methods: {
            fetchEventsList: function () {
                fetch(`${SITE_URL}/bitcoin/get_status`).then(x => x.json())
                    .then(data => {
                        this.lastBlockHeight = data.lastBlockHeight;
                        this.totalTransactions = data.totalTransactions;
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