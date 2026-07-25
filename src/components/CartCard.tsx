interface CardProps {
  url: string;
  category: string;
  product: string;
  price: string;
  quantity: number;
  subtotal: number;
}

export default function CartCard({
  url,
  category,
  product,
  price,
  quantity,
  subtotal,
}: CardProps) {
  return (
    <article className="grid grid-cols-4 items-center">
      <div className="">
        <img src={url} alt={`${product}`} />
      </div>

      <div className="flex flex-col leading-6">
        <span className="text-neutral-500 text-xs">{category}</span>
        <span className="font-semibold">{product}</span>
        <span className="font-semibold text-primary">$ {price}</span>
      </div>

      <div className="flex justify-center">{quantity}</div>
      <div className="flex justify-center">$ {subtotal}</div>
    </article>
  );
}
