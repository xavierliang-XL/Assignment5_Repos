<script setup>
import { useCart, useStore } from "../store/index.js"
const cart = useCart();
const store = useStore();
console.log(cart.purchase);
</script>

<template>

    <div class="cartlist" v-for="item in new Set(cart.purchase)" v-if="cart.purchase">
        <div class="display">
            <div class="name">
                {{ item }}: {{ store.movies.filter(x => x.id == item)[0].title }}
            </div>
            <div class="count">
                <button class="func_btn" @click="cart.addToCart(item)">+</button>
                count: {{ cart.purchase.filter(x => x == item).length }}
                <button class="func_btn" @click="cart.removeFromCart(item)">-</button>
            </div>
        </div>

    </div>

    <button class="purchase_btn" @click="cart.clear()">purchase</button>

</template>

<style scoped>
.cartlist {
    height: 100%;
}

.display {
    color: black;
    font-weight: 300;
    width: 97%;
    margin: 10px;
    background-color: white;
    border: 3px solid darkred;
    padding: 10px;
    display: list-item;
}

.name {
    float: left;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.count {
    float: right;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 1000;
}

.purchase_btn {
    width: 150px;
    height: 40px;
    margin-top: 20px;
    background: linear-gradient(to right, red, darkred);
    border: 1px solid red;
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    font-size: 20px;
    margin-left: 1%;
}

.func_btn {
    width: 30px;
    height: 30px;
    background: linear-gradient(to right, red, darkred);
    border: 1px solid red;
    border-radius: 5px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
}

.purchase_btn:hover,
.func_btn:hover {
    color: white;
}
</style>