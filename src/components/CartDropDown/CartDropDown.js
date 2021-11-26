import { Button } from 'react-bootstrap';
import React from 'react';
import Classes from './CartDropDown.module.css';

const CartDropDown = () => {
  return (
    <div className={Classes.cartDropdown}>
      <div className={Classes.cartItems} />
      <Button className={Classes.checkOutButton} variant='dark'>
        Check Out
      </Button>
    </div>
  );
};

export default CartDropDown;
