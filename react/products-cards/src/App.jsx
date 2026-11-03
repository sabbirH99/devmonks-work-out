import data from "./data/products.json"
import ProductCard from "./components/ProductCard"
import Filters from "./components/Filters"
import { useState } from "react"

function App() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [stockState, setStockState] = useState(false);


  function handleCategoryChange(newCategory) {
    setCategoryFilter(newCategory);
  }

  function handleStockState(isStockOnly) {
    setStockState(isStockOnly);
  }

  const filteredProducts = data.products.filter(product => {
    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;

    const matchesStock =
      !stockState || product.inStock;

    return matchesCategory && matchesStock;
  });

  const hasProducts = filteredProducts.length > 0;
  return (
    <>
      <main>
        <Filters
          categories={data.categories}
          currentCategory={categoryFilter}
          isStockOnly={stockState}
          handleCategoryChange={handleCategoryChange}
          handleStockState={handleStockState}
        />
        {hasProducts
          ? < ProductCard products={filteredProducts} />
          : <div className="empty-state">No products found.</div>
        }
      </main>
    </>
  )
}

export default App
