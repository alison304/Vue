<template>
	<div class="fcc m-0">
		<!-- <img class="p-2" height="170" src="../../public/lima_restaurant.png"> -->
		<form action="" @submit="checkForm">
			<FormItem v-if="errors.length">
				<b>Please correct the following error(s):</b>
					<div v-for="error in errors" :key="error">
						{{ error }}
					</div>
			</FormItem>
			<div class="fc my-3">
				<label for="inputEmail" class="form-label text-start">Email</label>
				<input type="text" class="form-control" id="inputEmail" placeholder="you@email.com" 
					v-model="email"/>
			</div>
			<div class="fc my-3">
				<label for="inputpassword" class="form-label text-start">Contraseña</label>
				<input type="password" class="form-control" v-model="password" required name="password">
				<field-messages>
					<div class="text-success">Correcto!</div>
					<div slot="required">El campo es obligatorio</div>
					<div slot="validator">El campo tiene mayor a 8 caracteres</div>
				</field-messages>
			</div> 
			<button type="submit" class="btn btn-success">INGRESAR</button>
		</form>		
		<br>
	</div>
</template>

<script>
export default {
	name: "LoginForm",
	components: {},	
	data() {
		return {
			errors: [],
			email: '',
			password: ''
	}},
	methods:{
		onSubmit(){
			if (this.formState.$invalid) {
				alert("ERROR EN EL FORMULARIO")
				return
			}
			alert("FORMULARIO ENVIADO")
		},
		passwordValidator: function (value) {
			let res = true
			if (value.length > 8) {
				res = false
			}
			return res;
		},
		nameValidator: function (value) {
			let res = true
			if (!value.includes('@')) {
				res = false
			}
			if (!value.includes('.com')) {
				res = false
			}
			return res;
		},
		checkForm: function (e) {
			e.preventDefault();
			this.errors = [];
			if (!this.email) {
				this.errors.push("Email required.");
			} else if (!this.validateEmail(this.email)) {
				this.errors.push('Valid email required.');
			}
			if (this.password.length < 6) {
				this.errors.push("Password must have 6 characters.");
			}
			if (!this.errors.length) {
				console.log('router');
				this.$router.replace('/shoppingCart');
			}
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
/*
// ...
<validate :custom="{customValidator: customValidator, 'email-available': isEmailAvailable}">
  <input v-model="something" name="something" />
  <!--
    slot name inside field-messages would be: <div slot="customValidator">...</div>
  -->
</validate>
 
//...
 
methods: {
  customValidator: function (value) {
    // return true to set input as $valid, false to set as $invalid
    return value === 'custom';
  }
},
computed: {
  isEmailAvailable: function () {
    // return true to set input as $valid, false to set as $invalid
  }
}

*/
</script>

<style scoped>
</style>
