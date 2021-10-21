import Button from '@material-ui/core/Button';

import { ProductListType } from '../../pages/home/Home';

import {Wrapper} from './cartItem.styles'

type Props = {
  item : ProductListType,
  addToCart: (clickedItem: ProductListType) => void ;
  removeFromCart : (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className="contentProject">
        <div className="informationProduct" >
          <div className="information">
            <p>Price: {item.salePrice}</p>
            <p>Mount: {item.amount}</p>
            <p>Total: ${(item.amount * item.salePrice)}</p>
          </div>
          <div className="button">
            <Button size="small"
              disableElevation
              variant= "contained"
              onClick= {() => removeFromCart(item.id)}
            >
              -
            </Button>

            <Button size="small"
              disableElevation
              variant= "contained"
              onClick= {() => addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
        <img src= {item.image} alt={item.name} ></img>
      </div>
    </div>

  </Wrapper>
  )

export default CartItem;
