import { useStore } from "./AppStateContext";

export function useFilteredProducts() {
  const { state } = useStore();
  const { category, minPrice, maxPrice, searchQuery, sortBy } = state.filters;

  const categories = category ? category.split(",") : [];

  let result = state.products.filter((product) => {
    const matchesCategory =
      categories.length === 0 ||
      categories.includes(product.category) ||
      categories.includes(product.subcategory);

    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  if (sortBy === "price-asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    result = [...result].sort((a, b) => b.price - a.price);
  }
  return result;
}
