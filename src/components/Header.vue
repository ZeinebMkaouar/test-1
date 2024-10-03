<template>
    <header>
      <div class="logo">
        <RouterLink to="/">My Shop</RouterLink>
      </div>
      <nav>
        <RouterLink to="/">Products</RouterLink>
        <RouterLink to="/panier">Panier</RouterLink>
      </nav>
    </header>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f8f9fa;
  }
  .logo {
    font-size: 24px;
  }
  nav a {
    margin: 0 15px;
    text-decoration: none;
  }
  nav a.router-link-exact-active {
    font-weight: bold;
  }
  </style>
  