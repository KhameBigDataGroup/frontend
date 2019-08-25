<template>
    <b-card
            header="Details"
            header-tag="header"
    >
        <b-card-text>
            <b-row>
                <b-col>
                    <b-card sub-title="Previous block">
                        <b-card-text :style="{fontSize: '2em'}">
                            <small :style="{fontSize: '0.5em'}">
                                <a :href="`/bitcoin/block/${block.previousblockhash}`">
                                    {{block.previousblockhash.substring(0, 20)}}
                                </a>
                            </small>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Total fee">
                        <b-card-text :style="{fontSize: '2em'}">
                            {{block.total_fee}}
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="# of transactions">
                        <b-card-text :style="{fontSize: '2em'}">
                            {{block.nTx}}
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
            <br>

            <b-row>
                <b-col>
                    <b-card sub-title="Size">
                        <b-card-text :style="{fontSize: '2em'}">
                            {{block.size}}
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Weight">
                        <b-card-text :style="{fontSize: '2em'}">
                            {{block.weight}}
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card sub-title="Bits">
                        <b-card-text :style="{fontSize: '2em'}">
                            {{block.bits}}
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: "BlockDetails",
        props: {
            block: null
        }
    }
</script>

<style scoped>

</style>