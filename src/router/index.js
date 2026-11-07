import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Signin from '../views/Signin.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'

const routes = [
  { path: '/webdevBurningPileTDL/login', name: 'login', component: Login },
  { path: '/webdevBurningPileTDL/logout', name: 'logout', component: Logout },
  { path: '/webdevBurningPileTDL/signin', name: 'signin', component: Signin },
  { path: '/webdevBurningPileTDL/about', name: 'about', component: About },
  { path: '/webdevBurningPileTDL/', name: 'main', component: Main }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})