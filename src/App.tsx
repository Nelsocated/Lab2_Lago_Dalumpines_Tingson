import Header from "./components/ui/Header";
import FilterBar from "./components/ui/FilterBar";
import CartModal from "./components/ui/CartModal";
import { StoreProvider } from "./components/state/AppStateContext";

export default function App() {
  return (
    <StoreProvider>
      <main className="h-screen overflow-y-auto">
        <Header />
        <FilterBar />
        <CartModal />
      </main>
    </StoreProvider>
  );
}
