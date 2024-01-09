import { createSlice } from '@reduxjs/toolkit';
import { ItemType, ProductType, CartState } from '../types.ts';

const initialState: CartState = {
  isOpen: false,
  cartItems: [],
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },

    replaceCart: (state, action: { payload: ItemType[] }) => {
      if (action.payload) {
        state.cartItems = action.payload;
      } else {
        state.cartItems = [];
      }
    },

    addItem: (state, action: { payload: ProductType | ItemType }) => {
      const { id, title, price } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
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
      state.changed = true;
    },

    removeItem: (state, action: { payload: ProductType | ItemType }) => {
      const { id } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== existingItem.id
        );
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
