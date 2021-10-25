import React from 'react'
import '../../assets/scss/pages/products.scss'
import { ProductListType } from '../home/Home'
import { Wrapper } from '../products/Products.styles'

import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'
import productsApi from '../../api/productsApi'
// export default function Products() {

//   return (
//     <div className="products">

//     </div>
//   )
// }
type Props = {
  item: ProductListType
  handleAddToCart: (clickedItem: ProductListType) => void
}

const Products: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image}></img>
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h5>${item.salePrice}</h5>
    </div>
    <Button onClick={() => handleAddToCart(item)}> Add to cart</Button>
  </Wrapper>
)

export default Products
