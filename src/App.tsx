import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CartModal from "./components/CartModal";
import type { Product } from "./components/interfaces";
import { useState } from "react";

const product: Product[] = [];

export default function App() {
  const [displayedProducts, setDisplayedProducts] =
    useState<Product[]>(product);

  return (
    <main className="h-screen overflow-y-auto">
      <Header />
      <FilterBar products={product} onFilter={setDisplayedProducts} />

      <CartModal />
    </main>
  );
}
