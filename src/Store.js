import { reactive } from 'vue';

const state = reactive({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
});

const addToCart = (product) => {
  const existingProduct = state.cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
  updateLocalStorage();
};

const removeFromCart = (productId) => {
  state.cart = state.cart.filter(item => item.id !== productId);
  updateLocalStorage();
  window.location.reload();
};

const updateQuantity = (productId, quantity) => {
  const product = state.cart.find(item => item.id === productId);
  if (product) {
    product.quantity = quantity;
  }
  updateLocalStorage();
};

const cartTotal = () => {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

const updateLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(state.cart));
};




export default {
  state,
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotal,
};
