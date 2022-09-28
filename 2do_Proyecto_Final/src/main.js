import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueForm from 'vue-form'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Home from './views/HomeIndex.vue'
import LoginForm from './views/LoginForm.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import RegisterPage from './views/RegisterPage.vue'
import App from './App.vue'
import './styles.css'

Vue.config.productionTip = false
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
	]

const router = new VueRouter({routes, mode: 'history'})
// export default new VueRouter({
// 	mode: 'history',
// 	base: process.env.BASE_URL,
// 	routes: [
// 		{
// 			path: '/',
// 			name: 'HomeIndex',
// 			component: () => import('./views/HomeIndex.vue')
// 		},
// 		{
// 			path: '/login',
// 			name: 'LoginForm',
// 			component: () => import('./views/LoginForm.vue')
// 		}, 
//     ]
// 	})

Vue.filter('url', function (value) {
	// Convierte el nombre del producto en la url donde esta la imagen
	value = value.toLowerCase()
	value = value.trim()
	value = value.replace(/[\s/]/g,'-')
	return `/${value}.jpg`
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
