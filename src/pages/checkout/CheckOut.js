import React from "react";
import { Table } from "react-bootstrap";
import { selectCartTotalAmount,selectCartItems } from "../../store/selectors/cartSelector";
import { useSelector } from "react-redux";
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem'
import "./CheckOut.css";
const CheckOut = () => {
 const state = useSelector((state)=>state)
 const totalAmout = selectCartTotalAmount(state)
 const cartItems = selectCartItems(state)
  return (
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
        {
          cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} item={cartItem} {...cartItem} />)
        }
      </tbody>
    </Table>
    <h3 style={{textAlign:'right'}}>
      Total: {totalAmout}$
    </h3>
    </>
  );
};

export default CheckOut;
