import { useActions } from "../state/useActions";
import { useFilteredProducts } from "../state/useFilteredProducts";

export default function ProductGrid() {
  const { addToCart } = useActions();
  const displayedProducts = useFilteredProducts();

  return (
    <section className="flex-1 h-[calc(100vh-5rem)] px-8 py-5 overflow-y-auto">
      <p className="mb-5 text-m text-neutral-500">
        Showing 1-{displayedProducts.length} of {displayedProducts.length}{" "}
        results
      </p>

      <div className="grid grid-cols-1 border-2 border-black gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <article
            key={product.id}
            className="flex h-[340px] min-w-0 flex-col overflow-hidden rounded-lg bg-white"
          >
            <div className="group border-2 border-black relative flex h-60 w-full items-center justify-center overflow-hidden bg-neutral-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-3"
              />
              <div className="absolute inset-0 grid place-items-center bg-orange-400/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-2xl border-2 border-black bg-orange-600 px-7 py-3 text-lg font-bold text-black shadow-sm transition hover:scale-105 hover:bg-orange-500"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col px-1 pt-3">
              <p className="text-[15px] text-neutral-400">{product.category}</p>
              <h2 className="truncate text-L font-medium">{product.name}</h2>
              <p className="text-xl font-bold text-primary">
                ₱{product.price.toLocaleString()}
              </p>
            </div>
          </article>
        ))}
      </div>

      {displayedProducts.length === 0 && (
        <p className="py-20 text-center text-sm text-neutral-500">
          No products match your filters.
        </p>
      )}
    </section>
  );
}
