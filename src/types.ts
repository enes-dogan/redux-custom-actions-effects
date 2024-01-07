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

export interface CartState {
  cart: {
    isOpen: boolean;
    cartItems: ItemType[];
  };
}

export interface ProductState {
  product: {
    products: ProductType[];
  };
}

export interface CartItemProps {
  item: ItemType;
}

export interface NotificationProps {
  status: 'error' | 'success';
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
