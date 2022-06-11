import React from "react";

import viewArrowIcon from "../../assets/view-arrow.svg";
import ProductCard from "../../components/product-card/ProductCard";

import { ACCESSORIES, ARRIVALS } from "../../constants/mocks";
import classes from "./Shop.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={classes.MainContainer}>
      <div className={classes.TitleContainer}>
        <div className={classes.TitleRight}>Just Arrivals</div>
        <Link to="/">
          <img src={viewArrowIcon} className={classes.TitleLeft} />
        </Link>
      </div>
      <div className={classes.ProductContainer}>
        {ARRIVALS.map((product) => (
          <ProductCard product={product} key={product.img} />
        ))}
      </div>
      <div className={classes.TitleContainer}>
        <div className={classes.TitleRight}>Accessories</div>
        <div />
      </div>
      <div className={classes.ProductContainer}>
        {ACCESSORIES.map((product) => (
          <ProductCard product={product} key={product.image} />
        ))}
      </div>
    </motion.div>
  );
}

export default Shop;
