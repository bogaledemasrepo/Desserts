export interface ImagePaths {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface DessertItem {
  image: ImagePaths;
  name: string;
  category: string;
  price: number;
}
export interface ItemInCart {
  image: ImagePaths;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

export interface UserOrderType {
  userId: string;
  orderId: string;
  orderedAt: Date | undefined;
  orderStatus: "Pending" | "Confirmed";
  Cart: ItemInCart[];
}
