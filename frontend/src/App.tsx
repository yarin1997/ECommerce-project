
import './App.css'
import { sampleProducts } from './data'

function App() {
  

  return (
    <div>
      <header>TS Amazona</header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img
              src={product.image}
              alt="product image"
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p> Price: {product.price}$</p>
          </li>
        ))}
      </main>
      <footer>All right reserved</footer>
    </div>
  )
}

export default App
