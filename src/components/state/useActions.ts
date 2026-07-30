import { useStore } from "./AppStateContext";
import { Product } from "../types/interfaces";

export function useActions() {
  const { setState } = useStore();

  function updateQuantity(id: string, newQuantity: number) {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    }));
  }

  function removeCartItem(id: string) {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== id),
    }));
  }

  function clearCart() {
    setState((prev) => ({ ...prev, cart: [] }));
  }

  function addToCart(product: Product) {
    setState((prev) => {
      const alreadyInCart = prev.cart.find((item) => item.id === product.id);

      return {
        ...prev,
        cart: alreadyInCart
          ? prev.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...prev.cart, { ...product, quantity: 1 }],
      };
    });
  }

  return { updateQuantity, removeCartItem, clearCart, addToCart };
}
