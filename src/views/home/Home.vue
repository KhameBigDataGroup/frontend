<template>
    <div>
        <br>
        <b-row>
            <b-col>
                <BitcoinStatus/>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <LatestBitcoinBlocks/>
            </b-col>
        </b-row>
        <br>
        <b-row>
            <b-col>
                <Charts />
            </b-col>
        </b-row>
    </div>
</template>

<script>

    import BitcoinStatus from "./BitcoinStatus";
    import LatestBitcoinBlocks from "./LatestBitcoinBlocks";
    import Charts from "./Charts";

    export default {
        name: 'Home',
        components: {Charts, BitcoinStatus, LatestBitcoinBlocks}
    }
</script>
                                                   