import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  cartItems: [
    { id: 'item1', title: 'Test Item', quantity: 3, total: 18, price: 6 },
    { id: 'item2', title: 'Test Item2', quantity: 3, total: 18, price: 6 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = cartSlice.actions;

export default cartSlice.reducer;
