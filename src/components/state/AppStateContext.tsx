// src/store/StoreContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { State } from "../types/interfaces";
import { products } from "../types/products";

const initialState: State = {
  products: products,
  cart: [],
  filters: {
    searchQuery: "",
    category: "",
    maxPrice: 10000,
    sortBy: "default",
  },
  isCartOpen: false,
};

interface StoreContextType {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(initialState);
  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
}
