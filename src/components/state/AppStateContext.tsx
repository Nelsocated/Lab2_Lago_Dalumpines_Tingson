// state/AppStateContext.tsx
import { createContext, useContext, useReducer, Dispatch } from "react";
import { appReducer } from "./appReducer";
import { Action } from "../types/interfaces";
import { State } from "../types/interfaces";
import { products } from "../types/products";

const initialState: State = {
  products,
  cart: [],
  filters: {
    searchQuery: "",
    category: "",
    minPrice: 0,
    maxPrice: 100000,
    sortBy: "default",
  },
  isCartOpen: false,
};

interface StoreContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<StoreContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useStore must be used within AppStateProvider");
  return ctx;
}
