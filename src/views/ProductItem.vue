// src/components/ProductItem.vue
<template>
  <div class="product-item">
    <img :src="product.image" alt="product.title" />
    <div class="product-details">
      <h3>{{ product.title }}</h3>
      <p>${{ product.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import store from '../Store'; 

export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      store.addToCart(this.product); 
     
    },
  },
};
</script>


<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-item:hover {
  transform: scale(1.05);
}
.product-item img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
}
.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #218838;
}
@media (max-width: 768px) {
  .product-item {
    width: 100%;
    max-width: 300px;
  }
}
</style>
