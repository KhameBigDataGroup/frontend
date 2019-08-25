<template>
    <div>
        <br>
        <div class="text-center" v-if="loading">
            <b-spinner variant="warning" type="grow" label="Loading"></b-spinner>
        </div>
        <div v-if="!loading">

            <b-jumbotron :header="`Block <em>#${block.height}</em>`" :lead="`Hash: ${block.hash}`"/>
            <BlockDetails :block="block" />
            <br>
            <Transactions :hash="block.hash" />
        </div>
        <br>
    </div>
</template>

<script>
    import {SITE_URL} from "../../config";
    import BlockDetails from "./BlockDetails";
    import Transactions from "./Transactions";

    export default {
        name: "BlockPage",
        components: {Transactions, BlockDetails},
        data() {
            return {
                block: null,
                loading: true
            }
        },

        created: function () {
            this.fetchBlock();
        },
        methods: {
            fetchBlock: function () {
                fetch(`${SITE_URL}/bitcoin/get_block/${this.$route.params.hash}`).then(x => x.json())
                    .then(data => {
                        this.block = data;
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