import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Product } from "./interfaces";

const category = [
  { name: "Laptop", items: ["Laptop_Sleeve", "USB-C_Hub"] },
  { name: "Phone", items: ["Phone_Case", "Phone_Stand"] },
  { name: "Tablet", items: ["Keyboard_Case", "Stylus_Pen"] },
  { name: "Peripherals", items: ["Keyboard", "Mouse", "Earphones"] },
];

interface FilterBarProps {
  products: Product[];
  onFilter: (result: Product[]) => void;
}

export default function FilterBar({ products, onFilter }: FilterBarProps) {
  const [filter, setFilter] = useState<string[]>([]);
  const [minVal, setMinVal] = useState(2500);
  const [maxVal, setMaxVal] = useState(7500);

  const MIN = 0;
  const MAX = 10000;

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

    const result = products.filter((product) => {
      const matchesCategory =
        filter.length === 0 || filter.includes(product.category);
      const matchesPrice = product.price >= minVal && product.price <= maxVal;

      return matchesCategory && matchesPrice;
    });

    onFilter(result);
    setFilter([]);
    setMaxVal(7500);
    setMinVal(2500);
  }

  return (
    <aside className="max-w-[225px] h-[calc(100vh-5rem)] border-r border-black">
      <h1 className="text-2xl font-bold py-2 px-5">Filter Options</h1>
      <hr />

      <form onSubmit={submitFilter}>
        {category.map(({ name, items }) => (
          <div key={name}>
            <div className="py-2 px-5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-primary peer-checked:bg-black"
                  value={name}
                  checked={filter.includes(name)}
                  onChange={() => handleCheckboxChange(name)}
                />{" "}
                {name}
              </label>

              {items.map((acc) => (
                <label key={acc} className="flex items-center ml-5 gap-2">
                  <input
                    type="checkbox"
                    className="accent-primary peer-checked:bg-black"
                    value={acc}
                    checked={filter.includes(acc)}
                    onChange={() => handleCheckboxChange(acc)}
                  />{" "}
                  {acc.replace(/_/g, " ")}
                </label>
              ))}
            </div>
            <hr />
          </div>
        ))}

        <label className="flex flex-col gap-2 px-5">
          Price
          <div className="w-full">
            <div className="flex gap-3 text-sm ml-5 mb-1">
              <span>$ {minVal}</span> -<span>$ {maxVal}</span>
            </div>

            <div className="relative h-2 flex items-center">
              <div className="absolute w-full h-2 bg-gray-300 rounded-full" />

              <div
                className="absolute h-2 bg-primary rounded-full"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              />

              <input
                type="range"
                min={0}
                max={10000}
                value={minVal}
                onChange={handleMinChange}
                className="absolute w-full pointer-events-none accent-primary appearance-none bg-transparent"
              />
              <input
                type="range"
                min={0}
                max={10000}
                value={maxVal}
                onChange={handleMaxChange}
                className="absolute w-full pointer-events-none accent-primary appearance-none bg-transparent"
              />
            </div>
          </div>
        </label>

        <div className="flex justify-center mt-5 px-5">
          <button
            type="submit"
            className="flex items-center justify-center gap-3 p-3 w-full border border-primary rounded-2xl hover:bg-primary transition-colors"
          >
            <SlidersHorizontal />
            <span className="font-semibold text-2xl">Filter</span>
          </button>
        </div>
      </form>
    </aside>
  );
}
