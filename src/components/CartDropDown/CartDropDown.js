import { Button } from 'react-bootstrap';
import React from 'react';
import Classes from './CartDropDown.module.css';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/selectors/cartSelector';

const CartDropDown = () => {
  const state = useSelector((state) => state);
  const cartItems = selectCartItems(state);
  return (
    <div className={Classes.cartDropdown}>
      <div className={Classes.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button className={Classes.checkOutButton} variant='dark'>
        Check Out
      </Button>
    </div>
  );
};

export default CartDropDown;
