<script setup>
import { useCart } from "../store/index.js";
const props = defineProps(["value"]);
const emits = defineEmits(["toggleModal"]);
const cart = useCart();
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')" custom>
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">Close</button>
        <img v-if="props.value.poster" :src="'https://image.tmdb.org/t/p/w500' + props.value.poster" class="img" />
        <p>
        <h1>{{ props.value.title }}</h1>
        Original Title - {{ props.value.original_title }} <br />
        Release Date: {{ props.value.release_date }} <br />
        Overview: {{ props.value.overview }}
        </p>
        <button class="cart" id="btn_sub" @click="cart.addToCart(props.value.id)">Add To Cart</button>
      </div>
    </div>
  </Teleport>
</template>


<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}

.img {
  float: left;
  border-radius: 20px;
  width: 20%;
  height: 90%;
  margin: 10px;
}

.modal-outer-container .modal-inner-container {
  background-color: white;
  width: clamp(980px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-inner-container {
  border-radius: 20px;
}

.close-button {
  border-top-right-radius: 20px;
}


.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 0.5rem;
  border: none;
  background: red;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.close-button:hover {
  color: black;
  background: white;
}

p {
  margin-left: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}

#btn_sub {
  width: 150px;
  height: 40px;
  margin-top: 20px;
  background: linear-gradient(to right, red, darkred);
  border: 1px solid red;
  border-radius: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 20px;
  margin-left: 2%;
}

#btn_sub:hover {
  color: white;
}
</style>
