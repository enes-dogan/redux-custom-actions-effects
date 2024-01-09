import { productActions } from './product-store.ts';
import { cartActions } from './cart-store.ts';
import { ItemType, NotificationProps, ActionsDispatchType } from '../types.ts';

export function fetchCartData() {
  return async (dispatch: ActionsDispatchType) => {
    async function fetchData() {
      const response = await fetch(
        'https://redux-async-b4ba6-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not Load cart.');
      }

      const data = (await response.json()) as ItemType[];

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
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
