export interface ItemType {
  id: string;
  title: string;
  price: number;
  total: number;
  quantity: number;
}

export interface ProductType {
  id: string;
  title: string;
  price: number;
  description: string;
}

export type CartStates = { cart: CartState };
export interface CartState {
  isOpen: boolean;
  cartItems: ItemType[];
}

export type ProductStates = { product: ProductState };
export interface ProductState {
  products: ProductType[];
  notification: NotificationProps;
}

export interface CartItemProps {
  item: ItemType;
}

export interface NotificationProps {
  status: 'error' | 'success' | 'pending' | '';
  title: string;
  message: string;
}

export interface childrenProp {
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}
