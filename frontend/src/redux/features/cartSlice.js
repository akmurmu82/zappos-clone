import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array to store cart items
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1; // Increment quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity
      }
      state.totalAmount += action.payload.price * (action.payload.quantity || 1);
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.items.find(item => item._id === _id);
      if (item) {
        state.totalAmount += (quantity - item.quantity) * item.price; // Update total based on quantity change
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});


export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
