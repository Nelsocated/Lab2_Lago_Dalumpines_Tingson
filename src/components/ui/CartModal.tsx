import { ShoppingCart, Trash, X } from "lucide-react";
import { useState } from "react";
import CartCard from "./CartCard";
import { useStore } from "../state/AppStateContext";
import { useActions } from "../state/useActions";

export default function CartModal() {
  const { state } = useStore();
  const { clearCart, checkout, toggleCart } = useActions();
  const [sub, setSub] = useState(0);
  const [shipping, setShipping] = useState(50);
  const [total, setTotal] = useState(0);

  function checkoutSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    checkout();
    setSub(0);
    setShipping(50);
    setTotal(0);
  }

  return (
    <>
      <button
        onClick={() => toggleCart}
        className="fixed bottom-6 right-6 z-40 border-2 border-primary rounded-full p-3 bg-white hover:scale-105 transition-all hover:bg-primary shadow-lg"
      >
        {state.cart.length > 0 && (
          <div className="absolute flex items-center justify-center w-5 h-5 bg-primary text-white text-xs font-bold rounded-full translate-x-6">
            {state.cart.length}
          </div>
        )}
        <ShoppingCart size={35} />
      </button>

      {state.isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <article className="max-w-lg w-full max-h-[60vh] border p-2 text-lg bg-white rounded-xl overflow-hidden flex flex-col">
            <form
              onSubmit={checkoutSubmit}
              className="flex flex-col flex-1 min-h-0"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} />
                  <h1 className="text-xl">Cart</h1>
                  <Trash onClick={() => clearCart()} />
                </div>
                <button type="button" onClick={() => toggleCart}>
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 min-h-0 space-y-2 overflow-y-auto scroll-smooth mb-2">
                {state.cart.map((item) => (
                  <CartCard key={item.id} {...item} />
                ))}
              </div>

              <hr className="bg-black" />

              <div className="grid grid-cols-2 justify-items-end items-center">
                <div className="flex flex-col justify-end text-sm">
                  <p>Subtotal</p>
                  <p>Shipping</p>
                </div>
                <div className="flex flex-col justify-end font-semibold mr-2">
                  <p>{sub ? `$ ${sub.toLocaleString()}` : 0}</p>
                  <p>{shipping ? `$ ${shipping.toLocaleString()}` : 0}</p>
                </div>
              </div>

              <hr className="bg-black" />

              <div className="grid grid-cols-2 justify-items-end items-center">
                <div className="flex flex-col justify-end font-semibold">
                  Total
                </div>
                <div className="flex flex-col justify-end font-bold text-primary mr-2">
                  {total ? `$ ${total.toLocaleString()}` : 0}
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-primary rounded-[15px] px-2 py-1 text-white font-bold flex items-center"
                >
                  Checkout
                </button>
              </div>
            </form>
          </article>
        </div>
      )}
    </>
  );
}
