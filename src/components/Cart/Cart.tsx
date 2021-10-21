import Button from '@material-ui/core/Button'

import { ProductListType } from '../../pages/home/Home'
import CartItem from '../cartItem/CartItem'
import ProductList from '../showProduct/ProductList'
import { Wrapper } from './cart.styles'


type Props = {
  cartItems: ProductListType[],
  addToCart: (clickedItem: ProductListType) => void
  removeFromCart: (id: number) => void
}

const Cart: React.FC<Props>= ({cartItems, addToCart, removeFromCart}) => {
  const calculateTotal = (items: ProductListType[]) =>
    items.reduce((ack:number, item) => ack + item.amount * item.salePrice, 0)

  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No item in cart</p>: null}
      {cartItems.map(item => (
        <CartItem
          key = {item.id}
          item = {item}
          addToCart = {addToCart}
          removeFromCart = {removeFromCart}
        />
      ))}
      <h2 >Total : ${calculateTotal(cartItems)}</h2>
    </Wrapper>
  )
}

export default Cart;
