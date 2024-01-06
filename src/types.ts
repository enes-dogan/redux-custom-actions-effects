export interface ItemType {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export interface CartState {
  cart: {
    isOpen: boolean;
  };
}

export interface CartItemProps {
  item: ItemType;
}

export interface childrenProp {
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProductItemProps {
  title: string;
  price: number;
  description: string;
}
