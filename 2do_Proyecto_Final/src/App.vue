<template>
	<div id="app">
		<div class="d-flex flex-row">
		<!-- <NavBar @page="page = $event" /> -->
		<!-- 	<router-link to="/">Home</router-link>
		<router-link to="/login">About</router-link> -->
		<!-- <div class="container"> -->
			<div class="d-flex position-relative">
				<img class="flex-shrink-0 me-0" height="150" src="../public/lima_restaurant.png">
			</div>
				<!-- <img class="p-2" height="170" src="../public/lima_restaurant.png"> -->
				<div>
					<h1 class="bold text-center w-100">
						Pedidos Lima Restaurant
					</h1>
					<div class="container text-center p-3">
						<div class="row w-100">
							<div class="col-4">
								<router-link to="/shoppingCart">ShoppingCart</router-link>
							</div>
							<div class="col-4">
								<router-link to="/login">Login</router-link>
							</div>	
							<div class="col-4">
								<router-link to="/registerPage">Register</router-link>
							</div>	
						</div>			
					</div>
				</div>
			<!-- <div v-if="page == 'login'">
				<LoginForm class="col-12" />
			</div>
			<div v-if="page == 'home'" class="row m-0 relative">
				<span class="total-bouncer bg-success py-2 px-4">
					TOTAL: S/. {{ total }}
				</span>
				<div class="col-12 px-0">
					<div v-for="tienda in tiendas" :key="tienda.id" class="border-green my-3 container">
						<div class="d-flex align-items-center py-3">
							<img class="tent-logo" :src="tienda.name | url" :alt="tienda.name" />
							<h2 class="py-3 ps-4 mb-0">{{ tienda.name }}</h2>
						</div>
						<div class="row">
							<div v-for="product in tienda.products" :key="product.id" class="col-3 px-1 mb-0">
								<ProductsCard :product="product" @buy="addItem($event)" :carrito="carrito"/>
							</div>
						</div>
					</div>
				</div>
			</div> -->
		<!-- </div> -->
		</div>
		<router-view></router-view>		
	</div>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
// import LoginForm from "./components/LoginForm.vue";
// import ProductsCard from "./components/ProductsCard.vue";

export default {
	name: "App",
	components: {
		// ProductsCard,
		// NavBar,
		// LoginForm,
	},
	data() {
		return {
			page: "login",
			carrito: [],
			tiendas: [
				{
					id: 1,
					name: "A la Carta",
					products: [
						{id: 1,name: "Lomo Saltado",price: 50},						
						{id: 2,name: "Trio Marino",price: 100},						
						{id: 3,name: "Aj?? de Pollo",price: 40},						
						{id: 4,name: "Arroz Chaufa de Pollo",price: 100},
					],
				},
				{
					id: 2,
					name: "Postres & Dulces",
					products: [
						{id: 5,name: "Picarones",price: 100},
						{id: 6,name: "Suspiro Lime??o",price: 100},
						{id: 7,name: "Mazamorra Morada",price: 100},
						{id: 8,name: "Turr??n Do??a Pepa",price: 100},
					],
				},
				{
					id: 3,
					name: "Bebidas, Jugos & Sandwiches",
					products: [
						{id: 9,name: "Sandwich de jam??n y Jugo",price: 100},
						{id: 10,name: "Pan con Chicharr??n y Caf??",price: 100},
						{id: 11,name: "Triple de Pollo y Papas Fritas",price: 100},
						{id: 12,name: "Sandwich de Lomo Saltado",price: 100},
					],
				},
			],
		};
	},
	computed: {
		total() {
			let res = 0;
			this.carrito.forEach((item) => {
				res += item.product.price * item.count;
			});
			return res;
		},
	},
	methods: {
		addItem(item) {
			let itemExists = false
			this.carrito.forEach((listItem) => {
				if (listItem.product.id == item.product.id) {
					listItem.count += item.sum;
					itemExists = true
				}
			});
			if (!itemExists) {
				this.carrito.push({product:item.product,count:1});
			}
		},
	},
};
</script>

<style scoped>
.border-green {
  border-top: 2px solid #9fff31;
}
.total-bouncer {
	border-radius: 48px;
	z-index: 99;
	color: #fff;
	font-weight: bold;
	font-size: 32px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: fit-content;
}
.tent-logo {
  width: 100px;
  border-radius: 12px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
