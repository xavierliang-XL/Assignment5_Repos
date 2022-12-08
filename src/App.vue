<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './view/home.vue'
</script>

<template>
    <nav>
    <img src="../assets/images/Catfish.webp" class="img" alt="logo" id="logo" />
    <p>CatFish Movies</p>
    <ul>
      <li>   
        <RouterLink to="/Home" @click="navigate" custom>Home</RouterLink>
      </li>
      <li>   
        <RouterLink to="/Login" @click="navigate" custom>Login</RouterLink>
      </li>
  </ul>
  </nav>
  <router-view/>
</template>

<style scoped>
nav {
  width: 100%;
  height: 150px;
  background: linear-gradient(to right, yellow, orange);
  border-radius: 20px;
  line-height: 80px;
  opacity: 1;
}

nav>p {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 100px;
  font-size: 80px;
  display: inline-block;
  margin-left: 23%;
  text-align: center;
  transform:translateY(-20%);
}

nav>ul {
  float: right;
  margin: 0;
  margin-right: 1.9rem;
}

nav>ul>li {
  color:black;
  font-size:30px;
  margin-right:10px;
  display: inline-block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transform:translateY(90%);
}
nav>ul>li:hover {
  color:white;
}

#logo {
  width:10%;
  height:100%;

}
</style>

