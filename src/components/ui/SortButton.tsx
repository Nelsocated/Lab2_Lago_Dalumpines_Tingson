import { useStore } from "../state/AppStateContext";
import { useActions } from "../state/useActions";
import { State } from "../types/interfaces";
import { ChevronDown } from "lucide-react";

export default function SortButton() {
  const { state } = useStore();
  const { setFilters } = useActions();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ sortBy: event.target.value as State["filters"]["sortBy"] });
  };

  return (
    <label className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-colors hover:border-primary">
      <span className="whitespace-nowrap text-neutral-700">Sort By:</span>
      <span className="relative flex items-center">
        <select
          value={state.filters.sortBy}
          onChange={handleSortChange}
          className="cursor-pointer appearance-none bg-transparent pr-6 font-semibold text-neutral-900 outline-none"
        >
          <option value="default">Featured</option>
          <option value="price-desc">High to Low</option>
          <option value="price-asc">Low to High</option>
          <option value="name-asc">A to Z</option>
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-0 text-neutral-900 transition-colors group-hover:text-primary"
        />
      </span>
    </label>
  );
}