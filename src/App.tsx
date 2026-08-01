import Header from "./components/ui/Header";
import Banner from "./components/ui/Banner";
import CartModal from "./components/ui/CartModal";
import ProductGrid from "./components/ui/ProductGrid";
import { AppStateProvider } from "./components/state/AppStateContext";

export default function App() {
  return (
    <AppStateProvider>
      <main>
        <div className="relative">
          <Header />
          <Banner />
        </div>

        <ProductGrid />
        <CartModal />
      </main>
    </AppStateProvider>
  );
}
