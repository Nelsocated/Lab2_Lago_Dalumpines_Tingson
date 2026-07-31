export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  image: string; // url to the product's image
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface State {
  products: Product[];
  cart: CartItem[];
  filters: {
    searchQuery: string;
    category: string;
    maxPrice: number;
    minPrice: number;
    sortBy: "default" | "price-asc" | "price-desc" | "name-asc";
  };
  isCartOpen: boolean;
}

export type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "SET_FILTERS"; payload: Partial<State["filters"]> }
  | { type: "TOGGLE_CART"; payload?: boolean }
  | { type: "CHECKOUT" };
