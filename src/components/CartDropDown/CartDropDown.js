import { Button } from 'react-bootstrap';
import React from 'react';
import Classes from './CartDropDown.module.css';
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/selectors/cartSelector';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
  const state = useSelector((state) => state);
  const cartItems = selectCartItems(state);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
  };
  return (
    <div className={Classes.cartDropdown}>
      <div className={Classes.cartItems}>
        {
          cartItems.length > 0?cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          )) : <h6 className='text-center'>Cart Is Empty</h6>
        }
      </div>
      <Button className={Classes.checkOutButton} variant='dark' onClick={goToCheckout}>
        Check Out
      </Button>
    </div>
  );
};

export default CartDropDown;
