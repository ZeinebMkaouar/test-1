import { createRouter, createWebHistory } from 'vue-router'

import ProductList from '../views/ProductList.vue' // Import ProductList component
import ShoppingCart from '@/views/ShoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    
    {
      path: '/', // Added comma here
      name: 'products', // Use lowercase for consistency
      component: ProductList,
    },
    {
      path: '/panier', // Shopping cart route
      name: 'shopping-cart', // Route name
      component: ShoppingCart, // Shopping cart component
    },
  ]
})

export default router
