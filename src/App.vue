<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from "vue-router";
import { isLoggedIn, useCart } from "./store/index";

const router = useRouter();
const cart = useCart();
</script>

<template>
  <nav>
    <img src="./assets/images/catfish.png" class="img" alt="logo" id="logo" />
    <p>CatFish Movies</p>
    <ul>
      <div id="block" />
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
        <div class="count">
          {{ cart.count }}
        </div>
        <img src="./assets/images/cart.png" @click="navigate" role="link" id="cart">
      </router-link>
    </ul>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  background-color: black;
  border-radius: 20px;
  line-height: 80px;
  opacity: 1;
}

nav>p {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 1vw;
  font-size: 4vw;
  display: inline-block;
  margin-left: 27%;
  text-align: center;
  transform: translateY(-50%);
  color: white;
}

nav>ul {
  float: right;
  padding: auto;
  width: 20%;
  margin: 0;
  margin-right: 1.9%;
}

button {
  display: inline-block;
  color: white;
  border: 0;
  background: 0;
  font-size: 2vw;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transform: translateY(40%);
}

#block {
  width: 50%;
}

button:hover {
  color: darkred;
}

#logo {
  width: 8%;
  height: 100%;
  transform: translateY(-25%);
}

#cart {
  display: inline-block;
  width: 15%;
  height: 100%;
  transform: translateY(60%);
}

.count {
  position: absolute;
  color: white;
  font-size: 0.8vw;
  font-weight: 600;
  z-index: 5;
  height: 10px;
  margin-right: 7.05%;
  top: 0;
  margin-top: 1.2%;
  right: 0;
}
</style>

