import React from "react";
import "./styles/cartProduct.css";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { useDispatch } from "react-redux";
import { getAllProductsCart } from "../../store/slices/cart.slice";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProductsCart());
      })
      .catch((err) => console.log(err));
  };

  console.log(product);

  return (
    <article className="cartProduct-container">
      <h2>{product.title}</h2>
      <div className="cartProduct__box">
        <ul className="cartProduct__ul">
          <li className="cartProduct__li">
            <span className="cartProduct__price">Price </span>
            {product.price}
          </li>
          <li className="cartProduct__li-qty">
            <span className="cartProduct__quantity">Quantity </span>
            {product.productsInCart.quantity}
          </li>
        </ul>
        <button onClick={handleDelete} className="card-p__btn">
          <i className="cart-p__icon fa-regular fa-trash-can"></i>
        </button>
      </div>
    </article>
  );
};

export default CartProduct;
