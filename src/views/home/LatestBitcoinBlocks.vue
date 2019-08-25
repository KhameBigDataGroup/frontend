<template>
    <b-card no-body>
        <b-card-header>
            <b-badge to="/bitcoin/all-blocks" :class="['float-right']" pill variant="info">All Blocks</b-badge>
            Latest Bitcoin Blocks
        </b-card-header>
        <b-card-body>
            <ListOfBitcoinBlocks :items="items"/>
            <div class="text-center" v-if="loading">
                <b-spinner variant="warning" type="grow" label="Loading"></b-spinner>
            </div>
        </b-card-body>
    </b-card>
</template>

<script>
    import {SITE_URL} from "../../config";
    import ListOfBitcoinBlocks from "../../components/bitcoin/ListOfBitcoinBlocks";

    export default {
        name: "LatestBitcoinBlocks",
        components: {ListOfBitcoinBlocks},
        data() {
            return {
                items: [],
                loading: true,
            }
        },

        created: function () {
            this.fetchCharts();
        },
        methods: {
            fetchCharts: function () {
                fetch(`${SITE_URL}/bitcoin/get_latest_blocks`).then(x => x.json())
                    .then(data => {
                        this.items = data.items;
                        this.loading = false;
                    }).catch(err => {
                    console.log(err);
                    this.loading = false;
                });
            }
        },


    }
</script>

<style scoped>

</style>