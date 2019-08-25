<template>
    <div>
        <br>
        <b-card no-body>
            <b-card-header>
                Latest Bitcoin Blocks
            </b-card-header>
            <b-card-body>
                <ListOfBitcoinBlocks :items="items"/>
                <div class="text-center" v-if="loading">
                    <b-spinner variant="warning" type="grow" label="Loading"></b-spinner>
                </div>
            </b-card-body>
        </b-card>
        <br>
    </div>
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
                loading: true
            }
        },

        created: function () {
            this.fetchCharts();
            this.scroll();
        },
        methods: {
            fetchCharts: function () {
                fetch(`${SITE_URL}/bitcoin/get_latest_blocks`).then(x => x.json())
                    .then(data => {
                        this.items = data.items;
                        this.loading = false;
                    }).catch(err => {
                    this.loading = false;
                    console.log(err);
                });
            },
            fetchMoreBlocks: function () {
                if (this.items.length > 0 && !this.loading) {
                    this.loading = true;
                    const nextHash = this.items[this.items.length - 1].previousblockhash;
                    fetch(`${SITE_URL}/bitcoin/get_blocks_from/${nextHash}`).then(x => x.json())
                        .then(data => {
                            this.items = this.items.concat(data.items);
                            this.loading = false;
                        }).catch(err => {
                        console.log(err);
                        this.loading = false;
                    });
                }
            },
            scroll() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 20 >= document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.fetchMoreBlocks();
                    }
                };
            }
        },


    }
</script>

<style scoped>

</style>