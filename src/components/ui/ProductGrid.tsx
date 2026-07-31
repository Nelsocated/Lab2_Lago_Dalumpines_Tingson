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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <article
            key={product.id}
            className="flex h-[360px] min-w-0 flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-neutral-100 transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="group relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-5"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:scale-105 hover:bg-orange-600"
                >
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col px-1 pt-3">
              <h2 className="truncate text-base font-bold text-neutral-900">{product.name}</h2>
              <p className="mt-0.5 text-lg font-bold text-primary">
                ₱{product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{product.category}</p>
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