import React from "react";
import starActive from "../../assets/star-active.svg";
import starInActive from "../../assets/star-inactive.svg";


import classes from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={classes.MainContainer}>
      <img src={product.image} className={classes.ProductImage} />
      <div className={classes.Space} />
      <div className={classes.Title}>{product.title}</div>
      <div className={classes.Space} />
      <div className={classes.RatingContainer}>
        {Array(product.rating)
          .fill(1)
          .map(() => (
            <img className={classes.RatingStar} src={starActive} />
          ))}
        {Array(5 - product.rating)
          .fill(1)
          .map(() => (
            <img className={classes.RatingStar} src={starInActive} />
          ))}
      </div>
      <div className={classes.Space} />
      <div className={classes.PriceContainer}>
        <span className={classes.CurrentPrice}>{product.price}</span>
        <span className={classes.InitialPrice}>{product.initialPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
