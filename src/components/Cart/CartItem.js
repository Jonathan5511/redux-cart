import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }

  const adddItemHandler=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={adddItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
