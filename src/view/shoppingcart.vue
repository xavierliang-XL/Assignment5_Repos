<script setup>
import { createApp } from "vue";
import {useCart} from  "../store/index.js"

const cart=useCart();

</script>

<template>

    {{cart.size}}

</template>

<style scoped>

</style>