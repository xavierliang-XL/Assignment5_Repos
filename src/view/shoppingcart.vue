<script setup>
import { createApp } from "vue";
import { useCart } from "../store/index.js"

const cart = useCart();
await cart.getCart();
</script>

<template>

<div class="cartlist" v-for="item in cart.purchase" v-if="cart.purchase">
    <div  v-if="item.item_count!=0">
        <div>
        {{item.id}}: {{item.title}}
        </div>
        <div>
            count: {{item.item_count}}
        </div>
    </div>

</div>

</template>

<style scoped>

</style>