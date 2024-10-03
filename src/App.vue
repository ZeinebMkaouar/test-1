<template>
  <div id="app">
    <Header @add-to-cart="addToCart" />
    <RouterView :cart="cart" @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      cart: [], // State for the shopping cart
    };
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    updateQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  text-align: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  width: 100%;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>