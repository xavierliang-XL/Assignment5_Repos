<script setup>
import { ref } from "vue";

const navigate= (link)=> {
  router.push(link);
}
</script>

<template>
  <div id="header">
    <nav>
      <img src="../assets/images/catfish.png" class="img" alt="logo" />
      <p>CatFish Movies</p>
      <RouterLink to="/Login" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Login</button>
      </RouterLink>
    </nav>
    <img src="../assets/images/3.webp" id="hero">
    <div class="intro">
      <p>
        CatFish Movies is a website for users to purchase and watch their wanted movies freely. We Sincerely hope that
        you would have an amazing watching experience
        here in our website.
      </p>
    </div>
  </div>
  <footer>
    <p>
      CatFish is the all‑in‑one platform to build a beautiful website.
    </p>
  </footer>
</template>

<style scoped>

footer {
  width: 100%;
  background: darkgrey;
}

footer>p{
  margin:0;
  padding:30px;
  color: white;
  font-size: 50px;
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:500;
}

.intro {
  margin-top: 10px;
  float: right;
  width: 28%;
  height: 820px;
  border-radius: 20px;
  background-color: black;
  opacity: 0.9;
}

.intro>p {
  text-align: center;
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: white;
  padding: 10px;
}

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
  margin-top: 2%;
  margin-left: 35%;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#hero {
  border-radius: 20px;
  margin-top: 10px;
  width: 70%;
  size: contain;
}
</style>
