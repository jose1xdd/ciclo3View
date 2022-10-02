import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import login from './components/login.vue'
import register from './components/register.vue'
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
}]
const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router