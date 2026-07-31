import { Action } from "../types/interfaces";
import { State } from "../types/interfaces";

export function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const alreadyInCart = state.cart.find((item) => item.id === product.id);

      return {
        ...state,
        cart: alreadyInCart
          ? state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.cart, { ...product, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item,
        ),
      };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "SET_FILTERS": {
      return { ...state, filters: { ...state.filters, ...action.payload } };
    }

    case "TOGGLE_CART": {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    }

    case "CHECKOUT": {
      if (state.cart.length === 0) {
        return state;
      }

      const purchasedIds = new Set(state.cart.map((item) => item.id));

      return {
        ...state,
        products: state.products.map((product) =>
          purchasedIds.has(product.id)
            ? { ...product, inStock: false }
            : product,
        ),
        cart: [],
        isCartOpen: false,
      };
    }

    default:
      return state;
  }
}
