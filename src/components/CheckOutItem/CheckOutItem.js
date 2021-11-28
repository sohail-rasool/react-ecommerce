import React from "react";
import { Image } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem,
} from "../../store/actions/cartDropDownAction";

const CheckOutItem = ({ imageUrl, name, price, quantity, id, item }) => {
  const dispatch = useDispatch();
  const addToCartItem = () => {
    dispatch(addItem(item));
  };
  const removecartItem = () => {
    dispatch(removeItem(item));
  }
  const removeFromCartItem = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <tr style={{ verticalAlign: "middle" }} className="text-center">
      <td>
        <Image
          src={imageUrl}
          rounded
          style={{ height: "150px", objectFit: "cover" }}
        />
      </td>
      <td>{name}</td>
      <td>
        <div>
          <span className="btn" style={{ color: "white" }}>
            <FaChevronLeft onClick={removecartItem} />
          </span>
          <span className="mx-3">{quantity}</span>
          <span className="btn" style={{ color: "white" }}>
            <FaChevronRight onClick={addToCartItem} />
          </span>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <span
          className="btn"
          style={{ color: "white" }}
          onClick={removeFromCartItem}
        >
          ✕
        </span>
      </td>
    </tr>
  );
};

export default CheckOutItem;
