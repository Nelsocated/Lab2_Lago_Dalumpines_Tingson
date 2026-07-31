import Header from "./components/ui/Header";
import Banner from "./components/ui/Banner";
import CartModal from "./components/ui/CartModal";
import ProductGrid from "./components/ui/ProductGrid";
import { AppStateProvider } from "./components/state/AppStateContext";

export default function App() {
  return (
    <AppStateProvider>
      <main className="h-screen overflow-y-auto">
        <div className="relative">
          <Banner />
          <Header />
        </div>

        <ProductGrid />
        <CartModal />
      </main>
    </AppStateProvider>
  );
}