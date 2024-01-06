import { createSlice } from '@reduxjs/toolkit';
import { ItemType, ProductType } from '../types.ts';

const initialState: { isOpen: boolean; cartItems: ItemType[] } = {
  isOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },

    addItem: (state, action: { payload: ProductType | ItemType }) => {
      const { id, title, price } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({
          id,
          title,
          quantity: 1,
          total: price,
          price,
        });
      }
    },

    removeItem: (state, action: { payload: ProductType | ItemType }) => {
      const { id } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 0) existingItem.quantity -= 1;
      if (existingItem && existingItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(item => item !== existingItem);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
