import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
