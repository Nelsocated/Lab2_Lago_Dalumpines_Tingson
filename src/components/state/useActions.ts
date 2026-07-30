import { useStore } from "./AppStateContext";
import { Product, State } from "../types/interfaces";

export function useActions() {
  const { dispatch } = useStore();

  return {
    addToCart: (product: Product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),

    removeCartItem: (id: string) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: { id } }),

    updateQuantity: (id: string, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }),

    clearCart: () => dispatch({ type: "CLEAR_CART" }),

    setFilters: (filters: Partial<State["filters"]>) =>
      dispatch({ type: "SET_FILTERS", payload: filters }),

    toggleCart: (open?: boolean) =>
      dispatch({ type: "TOGGLE_CART", payload: open }),

    checkout: () => dispatch({ type: "CHECKOUT" }),
  };
}
