import Header from "./components/Header";
import FilterBar from "./components/FilterBar";

export default function App() {
  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center text-black">
      <>
        <FilterBar />
        <Header />
      </>
    </main>
  );
}
