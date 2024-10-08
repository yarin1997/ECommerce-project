import { sampleProducts } from '../data'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div>
      <Row>
        {sampleProducts.map((product) => (
          <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.slug}`}>
            <img
              src={product.image}
              alt="product image"
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p> Price: {product.price}$</p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}
