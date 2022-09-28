import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeIndex.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginForm.vue')
  }
];
const router = new VueRouter({
  routes,
});