import React from "react";
import "./styles/cardPurchase.css";
import { convertTime } from "../../utils/convertTime";

const CardPurchase = ({ purchase }) => {
  // console.log(purchase)

  return (
    <article className="card-purchase__container">
      <div className="card-purchase__date">
        <header>
          {convertTime(`${purchase.updatedAt}`)}
        </header>
      </div>
      <div className="card-purchase">
        {purchase.cart.products.map((product) => (
          <section className="card-purchase__list" key={product.id}>
            <h3 className="card-purchase__title">{product.title}</h3>
            <div className="card-purchase__qty">
              {product.productsInCart.quantity}
            </div>
            <div className="card-purchase__price">${product.price}</div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default CardPurchase;
