import React from 'react';
import Classes from './CartItem.module.css';
import { Image } from 'react-bootstrap';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className={Classes.cartItem}>
      <Image
        className={Classes.imgItem}
        src={imageUrl}
        alt={name}
        style={{ objectFit: 'cover' }}
      />
      <div className={Classes.itemDetails}>
        <span className={Classes.nameItem}>{name}</span>
        <span>
          {quantity} × {`$ ${price}`}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
