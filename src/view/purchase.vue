<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";
import { ref } from "vue";

const store = useStore();
await store.getMovies();
const movies = store.movies;
console.log(movies);
</script>


<template>
  <div class="account-container">
    <div v-for=" (movie, index) in movies">
      <p>{{ movie.id }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>