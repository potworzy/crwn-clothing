import { useContext } from 'react'

import './shop.styles.scss'
import {ProductsContext} from '../../context/products.context'
import ProductCard from '../../components/product-card/product-card.component'

const Shop = () => {
  const {products} = useContext(ProductsContext)
  return (
  <div className="products-container">{products.map((product) => (
    <ProductCard product={product} key={product.id}>
    </ProductCard>
  ) )}</div>
  )
}
export default Shop
