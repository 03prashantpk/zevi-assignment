
export const applyFilters = (product, filters) => {
    // Apply brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.title)) {
      return false;
    }
  
    // Apply price range filter
    if (
      filters.priceRange.length > 0 &&
      !filters.priceRange.includes(product.price.toString())
    ) {
      return false;
    }
  
    // Apply rating filter
    if (
      filters.rating.length > 0 &&
      parseFloat(product.rating.rate) < parseFloat(filters.rating)
    ) {
      return false;
    }
  
    return true;
  };
  