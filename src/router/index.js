import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/home.vue";
import Login from "../view/login.vue";
import Purchase from "../view/purchase.vue";

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
},
{
    path:'/Purchase',
    name:'Purchase',
    component:Purchase
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;