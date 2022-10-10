import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueForm from 'vue-form'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './views/HomeIndex.vue'
import LoginForm from './views/LoginForm.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import RegisterPage from './views/RegisterPage.vue'
import UserList from './views/UserList.vue'
import App from './App.vue'
import store from './store'
import './styles.css'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueForm)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
		{
			path: '/',
			name: 'home',
			component: Home
		}, 
		{
			path: '/login',
			name: 'login',
			component: LoginForm
		},
		{
			path: '/shoppingCart',
			name: 'shoppingCart',
			component: ShoppingCart
		},
		{
			path: '/registerPage',
			name: 'registerPage',
			component: RegisterPage

		},		
		{
			path: '/userList',
			name: 'userList',
			component: UserList

		},
	]

const router = new VueRouter({routes, mode: 'history'})

Vue.filter('url', function (value) {
	// Convierte el nombre del producto en la url donde esta la imagen
	value = value.toLowerCase()
	value = value.trim()
	value = value.replace(/[\s/]/g,'-')
	return `/${value}.jpg`
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
