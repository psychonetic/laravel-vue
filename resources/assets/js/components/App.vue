<template>
    <div id="app">
        Hello World App!
        <!-- Main Content -->
        <router-view></router-view>
    </div>    
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                navItems: [
                    //add your nav items
                    // {
                    //     name: this.$t('app.nav.dashboard'),
                    //     to: 'dashboard.index',
                    //     icon: 'dashboard'
                    // },
                ],
            };
        },
    }
</script>

<style lang="css" scoped>
</style>