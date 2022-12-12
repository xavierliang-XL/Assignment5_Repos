<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useRouter } from "vue-router";
const router=useRouter();
const navigate = (link) => {
  router.push(link);
}
</script>

<template>
  <nav>
    <img src="./assets/images/Catfish.webp" class="img" alt="logo" id="logo" />
    <p>CatFish Movies</p>
    <ul>
        <router-link to="/" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">Home</button>
        </router-link>
        <router-link to="/login" custom v-slot="{ navigate }">
          <button @click="navigate" role="link">Login</button>
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
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
  margin: 0;
  margin-right: 1.9rem;
}

button {
  color: white;
  border:0;
  background:0;
  font-size: 30px;
  margin-right: 10px;
  display: inline-block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transform: translateY(40%);
}

button:hover {
  color: black;
}

#logo {
  width: 8%;
  height: 100%;
  transform: translateY(-25%);
}
</style>

