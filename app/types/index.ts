export type Product = {
  id: string;
  name: string;
  description: string;
  price?: number;
  images: string[];
  category: string;
  inStock: boolean;
  featuredImage: string;
  details?: {
    grade?: string;
    type?: string;
    packagingType?: string;
    packagingSize?: string;
    settingTime?: string;
  };
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
}; 