import faqs from "./data/data.json"
import FAQ from "./component/FAQ"

function App() {
  return (
    <main>
      <h1>Frequently Asked Questions</h1>

      <FAQ faqs={faqs} />
    </main>
  );
}

export default App
