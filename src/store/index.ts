import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-store.ts';
import ProductReducer from './product-store.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
