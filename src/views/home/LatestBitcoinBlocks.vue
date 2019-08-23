<template>
    <b-card no-body>
        <b-card-header>
            <b-badge to="/test" :class="['float-right']" pill variant="info">All Blocks</b-badge>
            Latest Bitcoin Blocks
        </b-card-header>
        <b-card-body>
            <b-table striped hover :items="items" :fields="['age', 'first_name', 'last_name', 'show_block']">
                <template slot="[show_block]" slot-scope="row">
                    <b-button size="sm" class="mr-2">
                        Details
                    </b-button>

                </template>

            </b-table>
        </b-card-body>
    </b-card>
</template>

<script>
    export default {
        name: "LatestBitcoinBlocks",

        data() {
            return {
                items: [

                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { age: 38, first_name: 'Jami', last_name: 'Carney' }
                ]
            }
        }

    }
</script>

<style scoped>

</style>