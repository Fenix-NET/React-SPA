import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ card }) => {
  const a = card.imgUrl;
  let b = a.split("Data");
  return (
    <div>
      <div className="product-card-container" key={card.id}>
        <div className="product-card-img">
          <img src={b[1]} alt="pic" />
        </div>
        <div className="product-card-name">
          <p>{card.id}</p>
        </div>
        <div className="product-card-price">
          <button>
            <span>Купить</span>
          </button>
          <span>Цена: {card.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
