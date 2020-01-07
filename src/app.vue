<style scoped>
@import "styles/common.css";
</style>
<template>
  <div>

    <router-view></router-view>
  </div>
</template>
<script>
    import Navhd from './views/index.vue'
    export default {
        name: 'app',
        components: {
            Navhd
        },
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
