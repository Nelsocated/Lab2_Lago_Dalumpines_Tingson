import { Trash } from "lucide-react";
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
    <article className="grid grid-cols-[80px_80px_1fr_1fr] gap-2 items-center">
      <div className="border-2 border-primary rounded-2xl h-20 w-full overflow-hidden">
        <img
          src={image}
          alt={`${name}`}
          className="w-full h-20 object-cover object-center"
        />
      </div>

      <div className="flex flex-col leading-6">
        <span className="text-neutral-500 text-xs">{category}</span>
        <span className="font-semibold truncate">{name}</span>
        <span className="font-semibold text-primary">$ {price}</span>
      </div>

      <div className="flex justify-center gap-3">
        {quantity}{" "}
        <div className="flex flex-col">
          <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(id, quantity - 1)}>-</button>
        </div>{" "}
      </div>
      <div className="flex justify-center gap-3">
        $ {subtotal} <Trash onClick={() => removeCartItem(id)} />
      </div>
    </article>
  );
}
