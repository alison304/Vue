<template>
	<div class="container">
		<b-table striped hover :items="userList"></b-table>
	</div>
</template>
<script>
export default {
	name: "UserList",
	components: {},
    computed:{
        userList(){
            return this.$store.getters.getUsers
        }
    },
    mounted() {
        this.$store.dispatch('get')
    },	
};
</script>

<style scoped>
</style>