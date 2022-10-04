import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import home from "./components/home.vue"
import account from "./components/account.vue"
import crudPaciente from "./components/crudPaciente.vue"
const routes = [{
    path: '/',
    name: 'root',
    component: App
},
{
    path: '/user/login',
    name: 'Login',
    component: login
},
{
    path: '/user/register',
    name: 'register',
    component: register
},
{
    path: '/user/home',
    name: "home",
    component: home

},
{
    path: '/user/account',
    name: "account",
    component: account

},
{
    path: '/user/crudPaciente',
    name: "crudPaciente",
    component: crudPaciente

}



]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router