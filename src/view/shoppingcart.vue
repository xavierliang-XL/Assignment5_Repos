<script setup>
import { createApp } from "vue";
import { useCart } from "../store/index.js"

const cart = useCart();
</script>

<template>

<div class="cartlist" v-for="item in cart.purchase" v-if="cart.purchase">
    <div class="display">
        <div>
            {{item.id}}: {{item.title}}
        </div>
    </div>

</div>

</template>

<style scoped>
.cartlist{
    height:100%;
}
.display{
    color:black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 300;
    width:100%;
    margin:10px;
}
</style>