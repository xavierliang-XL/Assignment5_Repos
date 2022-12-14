<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from "vue-router";
import { isLoggedIn, useCart } from "./store/index";

const router = useRouter();
const cart=useCart();
</script>

<template>
  <nav>
    <img src="./assets/images/catfish.png" class="img" alt="logo" id="logo" />
    <p>CatFish Movies</p>
    <ul>
      <div id="block"/>
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Home</button>
      </router-link>
      <router-link to="/Login" custom v-slot="{ navigate }" v-if="!isLoggedIn">
        <button @click="navigate" role="link">Login</button>
      </router-link>
      <router-link to="/Purchase" custom v-slot="{ navigate }" v-if="isLoggedIn">
        <button @click="navigate" role="link">Purchase</button>
      </router-link>
      <router-link to="/ShoppingCart" custom v-slot="{ navigate }" v-if="isLoggedIn">
        <img src="./assets/images/cart.png"  @click="navigate" role="link" id="cart" >
      </router-link>
    </ul>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, red, darkred);
  border-radius: 20px;
  line-height: 80px;
  opacity: 1;
}

nav>p {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100px;
  font-size: 60px;
  display: inline-block;
  margin-left: 27%;
  text-align: center;
  transform: translateY(-50%);
  color: white;
}

nav>ul {
  float: right;
  padding:auto;
  width:15%;
  margin: 0;
  margin-right: 1.9%;
}

button {
  display:inline-block;
  color: white;
  border: 0;
  background: 0;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transform: translateY(40%);
}

#block{
  width:50%;
}

button:hover {
  color: black;
}

#logo {
  width: 8%;
  height: 100%;
  transform: translateY(-25%);
}

#cart {
  display:inline-block;
  width: 15%;
  height: 100%;
  transform: translateY(60%);
}


</style>

