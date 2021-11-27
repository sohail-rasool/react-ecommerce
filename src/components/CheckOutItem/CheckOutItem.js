import React from "react";
import { Image } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const CheckOutItem = ({ imageUrl, name, price, quantity }) => {
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
          <span className="btn">
            <FaChevronLeft />
          </span>
          <span className="mx-3">{quantity}</span>
          <span className="btn">
            <FaChevronRight />
          </span>
        </div>
      </td>
      <td>${price}</td>
      <td><span className="btn">✕</span></td>
    </tr>
  );
};

export default CheckOutItem;
