<template>
	<div class="container">
		<form action="" @submit="checkForm">
			<FormItem v-if="errors.length">
				<b>Please correct the following error(s):</b>
					<div v-for="error in errors" :key="error">
						{{ error }}
					</div>
			</FormItem>
			<br />
			<div class="row justify-content-center">
				<div class="col col-6">
					<p style="font-weight: bold; font-size:x-large">FORMULARIO DE DATOS</p>
					<label for="inputNombre" class="text-start">Name</label>
					<input type="text" class="form-control" id="inputNombre" placeholder="Name" 
					v-model="name"/>
					<br />
        <label for="inputApellido" class="text-start">LastName</label>
					<input type="text" class="form-control" id="inputApellido" placeholder="LastName" 
					v-model="lastName"/>
					<br />
					<label for="inputEdad" class="form-label text-start">Age</label>
					<input type="number" class="form-control" id="inputEdad" placeholder="Age" 
					v-model="age" min="1" max="99"/>
					<br />
					<label for="inputEmail" class="form-label text-start">Email</label>
					<input type="email" class="form-control" id="inputEmail" placeholder="you@email.com" 
					v-model="email"/>
					<br />
					<hr />
					<div class="row">
						<br />
						<div class="col-10"></div>
						<br />
						<div class="col-2">
							<input type="submit" class="btn btn-outline-warning btn-lg" value="AGREGAR" />
						</div>
					</div>
				</div>
			</div>
			<br />
		</form>
	</div>
</template>
<script>
export default {
	name: "FormularioWeb",
	components: {},
	data() {
		return {
			errors: [],
			name: "",
			lastName: "",
			email: "",
			age:"",
		}
	},
    methods:{
		checkForm: function (e) {
			this.errors = [];
			if (!this.name){
				this.errors.push("Name required.");
			}
			if (!this.lastName) {
				this.errors.push("LastName required.");
			}
			if (!this.age) {
				this.errors.push("Age required.");
			}
			if (!this.email) {
				this.errors.push("Email required.");
			} else if (!this.validateEmail(this.email)) {
				this.errors.push('Valid email required.');
			}
			if (!this.errors.length) {
				this.addPerson();
			}
			e.preventDefault();
		},
        addPerson(){
			let person = {
				name: this.name,
				lastName: this.lastName,
				age: this.age,
				email: this.email,
			}
			this.$store.dispatch('create',person);
			this.cleanFields();
        },
        cleanFields(){
			this.name = "";
			this.lastName = "";			
			this.email = "";
			this.age = 0;			
        },
		validateEmail(email){
			var re = /\S+@\S+\.\S+/;
			if(email.match(re)) {
				return true;
			} else {
				return false;
			}
		},
    },
};
</script>

<style scoped>
</style>