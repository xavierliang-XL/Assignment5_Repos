<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DisplayMovies from '../components/DisplayMovies.vue';
import { useCart,useStore } from '../store';
const store=useStore();
const cart=useCart();
await cart.getCart();
</script>


<template>
  <Suspense>
    <DisplayMovies/>
  </Suspense>
</template>

<style scoped>

</style>