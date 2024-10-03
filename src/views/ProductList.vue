<template>
  <div class="product-list">
    <h2>Products</h2>
    <div v-if="loading">Loading...</div>
    <div v-else class="products">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
        this.loading = false;
      });
  },
  methods: {
    handleAddToCart(product) {
      this.$emit('add-to-cart', product); // Emit event to parent
    },
  },
};
</script>

<style scoped>
.product-list {
  width: 100%;
  margin: 20px 0;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media (max-width: 768px) {
  .products {
    flex-direction: column;
    align-items: center;
  }
}
</style>
