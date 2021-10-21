import { Button } from '@material-ui/core';
import React from 'react'
import '../../assets/scss/showProduct.scss';
import {ProductListType} from '../../pages/home/Home'
import { Wrapper } from './productList.styles';

type Props = {
  item: ProductListType ;
  handleAddToCart: (clickedItem: ProductListType) => void
}
const  ProductList : React.FC<Props> = ({item, handleAddToCart}) => (
  <Wrapper>
    <img src = {item.image}></img>
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <h3>${item.salePrice}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to card</Button>
  </Wrapper>
)
export default ProductList
