import { Trash2, Plus, Minus } from "lucide-react";
import { CartItem } from "../types/interfaces";
import { useActions } from "../state/useActions";

export default function CartCard({
  id,
  name,
  category,
  price,
  image,
  quantity,
}: CartItem) {
  const { updateQuantity, removeCartItem } = useActions();
  const subtotal = quantity * price;

  return (
    <article className="flex items-center gap-3 py-2 px-1 rounded-xl hover:bg-neutral-50 transition-colors">
      <div className="shrink-0 h-16 w-16 rounded-xl border border-primary overflow-hidden bg-neutral-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 min-w-0 leading-tight">
        <p className="text-[11px] uppercase tracking-wide text-neutral-400">
          {category}
        </p>
        <p className="font-semibold text-sm truncate">{name}</p>
        <p className="text-primary font-semibold text-sm mt-0.5">
          ₱{price.toLocaleString()}
        </p>
      </div>

      <div className="flex items-center gap-1 rounded-full border border-neutral-200 px-1 py-1 shrink-0">
        <button
          type="button"
          onClick={() => updateQuantity(id, quantity - 1)}
          className="grid place-items-center h-5 w-5 rounded-full hover:bg-neutral-100 active:scale-90 transition"
        >
          <Minus size={12} />
        </button>
        <span className="w-5 text-center text-sm font-medium">{quantity}</span>
        <button
          type="button"
          onClick={() => updateQuantity(id, quantity + 1)}
          className="grid place-items-center h-5 w-5 rounded-full hover:bg-neutral-100 active:scale-90 transition"
        >
          <Plus size={12} />
        </button>
      </div>

      <div className="flex items-center gap-2 shrink-0 w-20">
        <span className="font-semibold text-sm">
          ₱{subtotal.toLocaleString()}
        </span>
        <button
          type="button"
          onClick={() => removeCartItem(id)}
          className="text-neutral-400 hover:text-red-500 transition"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </article>
  );
}
