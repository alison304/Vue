<template>
	<div class="relative navbar-container">
		<div class="nav-bar">
			<div class="items">
				<div class="item-option">
					<div class="icon">
						<i class="fa-solid fa-xl fa-bars"></i>
					</div>
					<span>MENÚ</span>
				</div>
				<div>
					<router-link :to="'/'+page" v-for="(item,i) in items" :key="i" @click="$emit('page',item.page)" class="item-option">
						{{item.name}}
						<!-- <div class="icon">
							<i class="fa-solid fa-xl" :class="'fa-'+item.icon"></i>
						</div>
						<span>{{item.name}}</span> -->
					</router-link>
				</div>
				<div class="item-option">
					<div class="icon">
						<i class="fa-solid fa-xl fa-cog"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items:[
				{icon:"home",name:"HomeIndex",page:''},
				{icon:"user",name:"LoginForm",page:'login'},
			]
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>
.navbar-container {
	z-index: 99;
	width: 75px;
	min-width: 75px;
	height: 100vh;
	font-weight: bold;
	font-size: large;
}
.nav-bar {
	z-index: 99;
	position: fixed;
	transition: width 300ms;
	top: 0;
	left: 0;
	width: 75px;
	height: 100%;
	overflow: hidden;
}
.nav-bar:hover {
	width: 200px;
}
.items{
	width: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: bisque;
	
}
.item-option{
	display: flex;
	align-items: center;
	cursor: pointer;
}
.item-option:hover{
	background: #ddd8;
}
.icon{
	width: 75px;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>