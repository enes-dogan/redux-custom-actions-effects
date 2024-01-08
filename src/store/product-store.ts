import { createSlice } from '@reduxjs/toolkit';
import { ProductState, NotificationProps } from '../types.ts';

const initialState: ProductState = {
  products: [
    {
      id: 'p0',
      price: 7,
      title: 'Test',
      description: 'This is a first product - amazing!',
    },
    {
      id: 'p1',
      price: 6,
      title: 'My First Book',
      description: 'The first book I ever wrote',
    },
    {
      id: 'p2',
      price: 8,
      title: 'My Second Book',
      description: 'The second book I ever wrote',
    },
    {
      id: 'p3',
      price: 3,
      title: 'My Third Book',
      description: 'The Third book I ever wrote',
    },
  ],
  notification: {
    message: '',
    status: '',
    title: '',
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    showNotification: (state, action: { payload: NotificationProps }) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
