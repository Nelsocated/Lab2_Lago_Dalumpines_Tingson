import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CartModal from "./components/CartModal";

export default function App() {
  return (
    <main className="h-screen overflow-y-auto">
      <Header />
      <FilterBar />

      <CartModal />
    </main>
  );
}
