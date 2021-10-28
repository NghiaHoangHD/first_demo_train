import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
// import '../../assets/scss/showProduct.scss'
import '../../assets/scss/pages/productList.scss'
import { ProductListType } from '../../pages/home/Home'
import { Wrapper } from './productList.styles'

type Props = {
  item: ProductListType
  handleAddToCart: (clickedItem: ProductListType) => void
}
const ProductList: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper className="productList">
    <img src={item.image}></img>
    <div>
      <Link to={`/products/${item.id}`}>
        <h3>{item.name}</h3>
      </Link>
      <p>{item.description}</p>
      <h3>${item.salePrice}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to card</Button>
  </Wrapper>
)
export default ProductList
