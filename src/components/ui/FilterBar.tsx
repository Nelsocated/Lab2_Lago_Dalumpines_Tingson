import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { category } from "../types/category";
import { useActions } from "../state/useActions";

export default function FilterBar() {
  const { setFilters } = useActions();
  const [filter, setFilter] = useState<string[]>([]);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100000);

  const MIN = 0;
  const MAX = 100000;

  const handleCheckboxChange = (value: string) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinVal(Math.min(Number(e.target.value), maxVal - 1));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxVal(Math.max(Number(e.target.value), minVal + 1));
  };

  const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100;

  function submitFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFilters({
      category: filter.join(","),
      minPrice: minVal,
      maxPrice: maxVal,
    });
  }

  return (
    <aside className="flex flex-col w-[225px] shrink-0 h-[calc(100vh-5rem)] border-r border-neutral-200">
      <h1 className="text-xl font-bold py-3 px-5">Filter Options</h1>
      <hr className="border-neutral-200" />

      <form onSubmit={submitFilter} className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 min-h-0 overflow-y-auto">
          {category.map(({ name, subcategories }) => (
            <div key={name} className="border-b border-neutral-200">
              <div className="py-2 px-5 space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    value={name}
                    checked={filter.includes(name)}
                    onChange={() => handleCheckboxChange(name)}
                  />
                  {name}
                </label>

                {subcategories.map((acc) => (
                  <label
                    key={acc}
                    className="flex items-center ml-5 gap-2 text-sm text-neutral-500 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-primary"
                      value={acc}
                      checked={filter.includes(acc)}
                      onChange={() => handleCheckboxChange(acc)}
                    />
                    {acc.replace(/_/g, " ")}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-2 px-5 py-2">
            <span className="text-sm font-medium">Price</span>
            <div className="w-full">
              <div className="flex justify-between text-xs text-neutral-500 mb-2">
                <span>₱{minVal.toLocaleString()}</span>
                <span>₱{maxVal.toLocaleString()}</span>
              </div>

              <div className="relative h-2 flex items-center">
                <div className="absolute w-full h-1.5 bg-neutral-200 rounded-full" />

                <div
                  className="absolute h-1.5 bg-primary rounded-full"
                  style={{
                    left: `${minPercent}%`,
                    right: `${100 - maxPercent}%`,
                  }}
                />

                <input
                  type="range"
                  min={0}
                  max={100000}
                  value={minVal}
                  onChange={handleMinChange}
                  className="range-thumb absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none z-20"
                />
                <input
                  type="range"
                  min={0}
                  max={100000}
                  value={maxVal}
                  onChange={handleMaxChange}
                  className="range-thumb absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none z-20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-neutral-200">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-2.5 w-full border border-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            <SlidersHorizontal size={18} />
            <span>Filter</span>
          </button>
        </div>
      </form>
    </aside>
  );
}
