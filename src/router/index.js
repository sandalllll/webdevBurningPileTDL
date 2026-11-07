import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Signin from '../views/Signin.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/logout', name: 'logout', component: Logout },
  { path: '/signin', name: 'signin', component: Signin },
  { path: '/about', name: 'about', component: About },
  { path: '/', name: 'main', component: Main }
]

export const router = createRouter({
  history: createWebHashHistory('/webdevBurningPileTDL/'),
  routes
})