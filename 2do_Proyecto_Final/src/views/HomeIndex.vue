<template>
    <div>
        <NavBar @page="page = $event" />
        HomeIndex
    </div>
</template>

<script>
    import NavBar from "../components/NavBar.vue";
    export default {
        components: {NavBar}
    }
</script>

<style>

</style>