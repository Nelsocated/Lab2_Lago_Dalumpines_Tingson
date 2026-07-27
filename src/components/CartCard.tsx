import { CartItem } from "./interfaces";

export default function CartCard({
  id,
  name,
  category,
  price,
  image,
  quantity,
}: CartItem) {
  const subtotal = quantity * price;

  return (
    <article
      key={id}
      className="grid grid-cols-[80px_80px_1fr_1fr] gap-2 items-center"
    >
      <div className="border-2 border-primary rounded-2xl h-20 w-full overflow-hidden">
        <img
          src={image}
          alt={`${name}`}
          className="w-full h-20 object-cover object-center"
        />
      </div>

      <div className="flex flex-col leading-6">
        <span className="text-neutral-500 text-xs">{category}</span>
        <span className="font-semibold">{name}</span>
        <span className="font-semibold text-primary">$ {price}</span>
      </div>

      <div className="flex justify-center">{quantity}</div>
      <div className="flex justify-center">$ {subtotal}</div>
    </article>
  );
}
