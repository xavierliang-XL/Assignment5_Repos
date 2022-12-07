import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/home.vue";
import Login from "../view/login.vue";

const routes=[
{
    path:'/',
    name:'Home',
    component: Home
}, 
{
    path:'/Login',
    name:'Login',
    component:Login
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;