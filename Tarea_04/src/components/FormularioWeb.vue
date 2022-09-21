<template>
	<div class="container">
		<form action="">
			<div class="row justify-content-center">
				<div class="col col-6">
					<br /><br />
					<label for="inputNombre" class="text-start">Name</label>
					<input type="text" class="form-control" id="inputNombre" placeholder="Name" 
					v-model="name"/>
					<p>Validate Name: <span class="text-success fw-bold">{{name}}</span></p>
					<br />
        <label for="inputApellido" class="text-start">LastName</label>
					<input type="text" class="form-control" id="inputApellido" placeholder="LastName" 
					v-model="lastName"/>
					<p>Validate LastName: <span class="text-success fw-bold">{{lastName}}</span></p>
    <br />
					<label for="inputEdad" class="form-label text-start">Age</label>
					<input type="number" class="form-control" id="inputEdad" placeholder="Age" 
					v-model="age"/>
					<p>Validate Age: <span class="text-success fw-bold">{{age}}</span></p>
					<br />
					<label for="inputEmail" class="form-label text-start">Email</label>
					<input type="email" class="form-control" id="inputEmail" placeholder="you@email.com" 
					v-model="email"/>
					<p>Validate Email: <span class="text-success fw-bold">{{email}}</span></p>
    <br />
					<hr />
					<div class="row">
						<br />
						<div class="col-10"></div>
						<br />
						<div class="col-2">
							<input @click="addPerson()" class="btn btn-primary" value="Add" />
						</div>
						<br />
					</div>
				</div>
			</div>
		</form>
		<b-table striped hover :items="people"></b-table>
	</div>
</template>
<script>
export default {
	name: "FormularioWeb",
	components: {

},
	data() {
		return {
			name: "",
			lastName: "",
			email: "",
			age:0,
			people: [

			],

		}
	},
    methods:{
        addPerson(){
			let person = {
				name: this.name,
				lastName: this.lastName,
				email: this.email,
				age: this.age,
			}
			this.people.push(person);
			this.cleanFields();
        },
        cleanFields(){
			this.name = "";
			this.lastName = "";			
			this.email = "";
			this.age = 0;			
        },		
    },
};
</script>

<style scoped>
	a {
		color: #42b983;
	}
	label {
		margin-left: 0.5em !important;
	}
</style>