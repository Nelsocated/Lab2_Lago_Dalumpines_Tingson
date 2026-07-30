import { useStore } from "./AppStateContext";

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

  return { updateQuantity, removeCartItem, clearCart };
}
