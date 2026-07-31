import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { useActions } from "../state/useActions";
import { useFilteredProducts } from "../state/useFilteredProducts";
import FilterBar from "./FilterBar";
import SortButton from "./SortButton";

export default function ProductGrid() {
  const { addToCart } = useActions();
  const displayedProducts = useFilteredProducts();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <section className="flex-1 px-10 lg:px-16 py-10">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-neutral-900">Products</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Showing 1-{displayedProducts.length} of {displayedProducts.length}{" "}
          results
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <SortButton />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProducts.map((product) => (
          <article
            key={product.id}
            className="flex h-[360px] min-w-0 flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-neutral-100 transition-shadow duration-200 hover:shadow-lg"
          >
            <div className="group relative flex h-56 w-full items-center justify-center overflow-hidden rounded-xl bg-white border border-neutral-100">
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
              <h2 className="truncate text-base font-bold text-neutral-900">
                {product.name}
              </h2>
              <p className="mt-0.5 text-lg font-bold text-primary">
                ₱{product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                {product.category}
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

      {filtersOpen && (
        <div className="fixed inset-0 z-50 flex justify-start bg-black/40">
          <div
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0"
          />

          <div className="relative h-full w-full max-w-[280px] overflow-y-auto bg-white shadow-xl animate-in slide-in-from-left">
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
              <span className="font-bold text-neutral-900">Filter Options</span>
              <button type="button" onClick={() => setFiltersOpen(false)}>
                <X size={20} className="text-neutral-500" />
              </button>
            </div>
            <FilterBar />
          </div>
        </div>
      )}
    </section>
  );
}
