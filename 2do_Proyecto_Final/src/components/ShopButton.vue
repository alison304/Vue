<template>
	<div>
		<div v-if="count <= 0">
			<button class="btn w-100 btn-success" @click="buy(1)">
			COMPRAR <span class="fa-solid fa-cart-plus"></span>
			</button>
		</div>
		<div v-else class="d-flex justify-content-between align-items-center">
			<button class="btn w-25 btn-success" @click="buy(-1)">
				<span class="fa-solid fa-minus">-</span>
			</button>
			{{count}}
			<button class="btn w-25 btn-success" @click="buy(1)">
				<span class="fa-solid fa-plus">+</span>
			</button>
		</div>
		<div v-if="validateAdmin()">
			<button class="btn btn-primary btn-lg" @click="editProduct()">Editar</button>
			<button class="btn btn-secondary btn-lg" @click="deleteProduct()">Eliminar</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {product: Object,carrito: Array},
	data(){return {
		}},
	computed:{
		count(){
			let item = this.carrito.find(i => i.product.id == this.product.id)
			return item ? item.count : 0
		},
	},
	methods: {
		buy(count) {
			this.$emit('buy',{product:this.product,sum:count})
		},
		validateAdmin() {
			if (localStorage.isAdmin === 'true') {
				return true;
			} else {
				return false;
			}				
		},
		async deleteProduct() {
			await this.axios.put("https://6334b866ea0de5318a0800ad.mockapi.io/tiendas/" + this.product.id);			
		}		
	},
}
</script>

<style scoped>
</style>
