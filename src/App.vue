<template>
    <div id="app">
        <Navbar/>

        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<style lang="scss">
    @import 'assets/custom.scss';

</style>
<script>
    import Navbar from "./components/Layout/Navbar";

    export default {
        components: {Navbar}
    }
</script>