import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueForm from 'vue-form'
import Home from './views/HomeIndex.vue'
import LoginForm from './views/LoginForm.vue'
import App from './App.vue'
import './styles.css'

Vue.config.productionTip = false
Vue.use(VueForm)
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
		}, 
		{
		path: '/login',
		name: 'login',
		component: LoginForm
		}
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
