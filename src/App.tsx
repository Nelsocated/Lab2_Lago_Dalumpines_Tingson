import Header from "./components/ui/Header";
import FilterBar from "./components/ui/FilterBar";
import CartModal from "./components/ui/CartModal";
import ProductGrid from "./components/ui/ProductGrid";
import { AppStateProvider } from "./components/state/AppStateContext";

export default function App() {
  return (
    <AppStateProvider>
      <main className="h-screen overflow-y-auto">
        <Header />
        <div className="flex min-h-[calc(100vh-5rem)]">
          <FilterBar />
          <ProductGrid />
        </div>
        <CartModal />
      </main>
    </AppStateProvider>
  );
}
