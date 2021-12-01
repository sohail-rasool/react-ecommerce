import React from 'react';
import { Table } from 'react-bootstrap';
import {
  selectCartTotalAmount,
  selectCartItems,
} from '../../store/selectors/cartSelector';
import { useSelector } from 'react-redux';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
import './CheckOut.css';
const CheckOut = () => {
  const state = useSelector((state) => state);
  const totalAmout = selectCartTotalAmount(state);
  const cartItems = selectCartItems(state);
  let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return (
    <>
      {cartItems.length !== 0 ? (
        <>
          <Table striped bordered hover className='custom-table'>
            <thead className='text-center'>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} item={cartItem} {...cartItem} />
              ))}
            </tbody>
          </Table>
          <h3 style={{ textAlign: 'right' }}>Total: {totalAmout}$</h3>
          <div className='text-center'>
            <StripeButton price={totalAmout} />
          </div>
          <p className='mt-5 text-danger text-center'>
            Test Credit cart Info (4242424242424242 exp:
            {months[new Date().getUTCMonth()]}/{new Date().getFullYear()} -
            CW:123)
          </p>
        </>
      ) : (
        <h2 className='text-center'>Cart is empty</h2>
      )}
    </>
  );
};

export default CheckOut;
