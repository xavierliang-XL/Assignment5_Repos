import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/home.vue";
import Login from "../view/login.vue";
import Purchase from "../view/purchase.vue";
import ShoppingCart from "../view/shoppingcart.vue";

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
},
{
    path:'/ShoppingCart',
    name:'ShoppingCart',
    component:ShoppingCart
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;