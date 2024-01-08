import { createSlice } from '@reduxjs/toolkit';
import {
  ItemType,
  NotificationProps,
  ProductType,
  CartState,
} from '../types.ts';
import { productActions } from './product-store.ts';

const initialState: CartState = {
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
    },

    removeItem: (state, action: { payload: ProductType | ItemType }) => {
      const { id } = action.payload;

      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem!.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== existingItem!.id
        );
      } else {
        existingItem!.quantity--;
        existingItem!.total = existingItem!.quantity * existingItem!.price;
      }
    },
  },
});

export function sendCartData(cartItems: ItemType[]) {
  return async (dispatch: (arg0: { payload: NotificationProps }) => void) => {
    dispatch(
      productActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    async function sendReq() {
      const response = await fetch(
        'https://redux-async-b4ba6-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendReq();

      dispatch(
        productActions.showNotification({
          status: 'success',
          title: 'Successs!',
          message: 'Sent cart data successfully.',
        })
      );
    } catch (error) {
      dispatch(
        productActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
