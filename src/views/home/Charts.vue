<template>
    <b-card
            header="Charts"
            header-tag="header"
            border-variant="info"
            header-bg-variant="info"
            header-text-variant="white"
    >
        <b-card-text>
            <b-row v-if="!loading">
                <b-col>
                    <Chart :chartdata="chartData1" :options="chartOptions1"/>
                </b-col>
                <b-col>
                    <Chart :chartdata="chartData2" :options="chartOptions2"/>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</template>

<script>
    import {SITE_URL} from "../../config";
    import Chart from "./Chart";

    export default {
        name: "Charts",
        components: {Chart},
        data() {
            return {
                loading: true,
                chartData1: null,
                chartOptions1: null,
                chartData2: null,
                chartOptions2: null
            }
        },
        created: function () {

            this.fetchCharts();

        },
        methods: {
            fetchCharts: function () {
                fetch(`${SITE_URL}/bitcoin/get_charts`).then(x => x.json())
                    .then(data => {
                        this.chartData1 = data.chartData1;
                        this.chartData2 = data.chartData2;
                        this.chartOptions1 = data.chartOptions1;
                        this.chartOptions2 = data.chartOptions2;
                        this.loading = false;
                    }).catch(err => {
                    console.log(err);
                });
            },

        },
    }
</script>

<style scoped>

</style>