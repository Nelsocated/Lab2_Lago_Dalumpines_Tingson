import { useEffect, useRef, useState } from "react";
import { useStore } from "../state/AppStateContext";
import { useActions } from "../state/useActions";
import { State } from "../types/interfaces";
import { ArrowUpDown, ArrowUp, ArrowDown, Check } from "lucide-react";

type SortValue = State["filters"]["sortBy"];

const OPTIONS: { value: SortValue; label: string }[] = [
  { value: "default", label: "Featured" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "name-asc", label: "Name: A to Z" },
];

function SortIcon({ value }: { value: SortValue }) {
  if (value === "price-desc") return <ArrowDown size={15} strokeWidth={2.5} />;
  if (value === "price-asc") return <ArrowUp size={15} strokeWidth={2.5} />;
  return <ArrowUpDown size={15} strokeWidth={2.5} />;
}

export default function SortButton() {
  const { state } = useStore();
  const { setFilters } = useActions();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current =
    OPTIONS.find((o) => o.value === state.filters.sortBy) ?? OPTIONS[0];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const choose = (value: SortValue) => {
    setFilters({ sortBy: value });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`group flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-150
          ${open ? "border-primary ring-2 ring-primary/15" : "border-neutral-200 hover:border-primary"}
          bg-white text-neutral-700`}
      >
        <span
          className={`flex items-center justify-center transition-colors ${
            open || state.filters.sortBy !== "default"
              ? "text-primary"
              : "text-neutral-400"
          }`}
        >
          <SortIcon value={state.filters.sortBy} />
        </span>
        <span className="whitespace-nowrap text-neutral-500">Sort:</span>
        <span className="whitespace-nowrap text-neutral-900">
          {current.label}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-2 w-56 origin-top-right animate-[fadeIn_120ms_ease-out] rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-lg shadow-neutral-900/5"
        >
          {OPTIONS.map((opt) => {
            const active = opt.value === state.filters.sortBy;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => choose(opt.value)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors
                    ${active ? "bg-primary/8 text-primary" : "text-neutral-700 hover:bg-neutral-50"}`}
                >
                  <span className="flex items-center gap-2.5">
                    <SortIcon value={opt.value} />
                    {opt.label}
                  </span>
                  {active && <Check size={15} strokeWidth={2.5} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
