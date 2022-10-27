import React from "react";
import { useDispatch } from "react-redux";
import {
  ascendingProducts,
  descendingProducts,
} from "../../store/slices/products.slice";
import "./styles/orderByPrice.css";

const OrderByPrice = () => {
  const dispatch = useDispatch();

  const handleAscending = () => {
    dispatch(ascendingProducts());
  };

  const handleDescending = () => {
    dispatch(descendingProducts());
  };

  return (
    <div className="order-container">
      <h3 className="order__title">Order</h3>
      <div className="order__btn-container">
        <button onClick={handleAscending} className="order__btn">
          Ascending ⬆
        </button>
        <button onClick={handleDescending} className="order__btn">
          Descending ⬇
        </button>
      </div>
    </div>
  );
};

export default OrderByPrice;
