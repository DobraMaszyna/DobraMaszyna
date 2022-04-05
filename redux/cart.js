import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {},
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
