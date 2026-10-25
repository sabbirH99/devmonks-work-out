import data from "./data/products.json"
import ProductCard from "./components/ProductCard"
import Filters from "./components/Filters"

function App() {
  return (
    <>
      <main>
        <Filters categories={data.categories} />
        <ProductCard products={data.products} />
      </main>
    </>
  )
}

export default App
