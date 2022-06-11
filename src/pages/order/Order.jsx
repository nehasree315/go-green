import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import classes from "./Order.module.css";
import exploreIcon from "../../assets/explore.svg";
import starActive from "../../assets/star-active.svg";
import starInActive from "../../assets/star-inactive.svg";
import blackDot from "../../assets/black-dot.svg";
import greyDot from "../../assets/grey-dot.svg";
import redDot from "../../assets/red-dot.svg";
import arrowUp from "../../assets/arrow-up.svg";
import { SHOWCASE } from "../../constants/mocks";

const COLORS = [
  { label: "black", dot: blackDot },
  { label: "grey", dot: greyDot },
  { label: "red", dot: redDot },
];

function Order() {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();

  const { product } = state || {};

  const [selectedColor, setSelectedColor] = useState(product?.color);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  React.useEffect(() => {
    setIsColorOpen(false);

    if (product && selectedColor !== product.color) navigate("/order", { state: { product: selectedColor === "black" ? SHOWCASE[0] : selectedColor === "red" ? SHOWCASE[2] : SHOWCASE[1] } });
  }, [selectedColor]);

  if (!product) return <></>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={classes.MainContainer}>
      <div className={classes.BgContainer} />
      <div className={classes.InnerContainer}>
        <AnimatePresence>
          <motion.div
            key={pathname}
            initial={{ x: -window.innerWidth, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 2 } }}
            exit={{ x: -window.innerWidth, opacity: 0, transition: { duration: 2 } }}
            className={classes.InnerImageSection}
          >
            <motion.img key={product.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={product.image} className={classes.InnerImage} />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={pathname}
            initial={{ x: window.innerWidth }}
            animate={{ x: 0, transition: { duration: 2 } }}
            exit={{ x: window.innerWidth, transition: { duration: 2 } }}
            className={classes.RightSection}
          >
            <div className={classes.BuySection}>
              <div className={classes.Title}>Go Green</div>
              <div className={classes.Horizontal}>
                <div className={classes.Model}>{product.description}</div>
                <div className={classes.RatingContainer}>
                  {Array(product.rating)
                    .fill(1)
                    .map((val, ind) => (
                      <img key={ind} className={classes.RatingStar} src={starActive} />
                    ))}
                  {Array(5 - product.rating)
                    .fill(1)
                    .map((val, ind) => (
                      <img key={ind} className={classes.RatingStar} src={starInActive} />
                    ))}
                </div>
              </div>
              <div className={classes.Description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum asperiores earum blanditiis exercitationem eligendi, odio nobis optio, quod est minima maxime illum. Odio quis
                voluptatibus id at itaque blanditiis sapiente.
              </div>
              <div className={classes.Space} />
              <div className={classes.Divider} />
              <div className={classes.Horizontal} style={{ zIndex: 2 }}>
                <div>
                  <div className={classes.ColorLabel}>Color</div>
                  <div className={classes.Space10} />
                  <div style={{ position: "relative" }}>
                    <div className={classes.ColorSelectedOption}>
                      <div className={classes.ColorSelectedOptionText}>
                        {selectedColor[0].toUpperCase()}
                        {selectedColor.substring(1)}
                      </div>
                      <div className={classes.SelectVerticalDivider} />
                      <motion.img
                        animate={{ rotateZ: isColorOpen ? 0 : 180, transition: { duration: 1 } }}
                        className={classes.SelectArrow}
                        src={arrowUp}
                        onClick={() => setIsColorOpen(!isColorOpen)}
                        alt="dropdown"
                      />
                    </div>
                    <AnimatePresence>
                      {isColorOpen && (
                        <motion.div
                          className={classes.ColorOptionContainer}
                          initial={{ height: 0 }}
                          animate={{ height: 40 * (COLORS.length - 1), transition: { duration: 1 } }}
                          exit={{ height: 0, transition: { duration: 1 } }}
                          style={{ position: "absolute", top: 40, left: 0, backgroundColor: "white" }}
                        >
                          {COLORS.map(
                            (item) =>
                              item.label !== selectedColor && (
                                <div className={classes.DropdownOption} onClick={() => setSelectedColor(item.label)}>
                                  <span>
                                    {item.label[0].toUpperCase()}
                                    {item.label.substring(1)}
                                  </span>
                                  <img className={classes.ColorDot} src={item.dot} alt="dot" />
                                </div>
                              )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className={classes.QuantityContainer}>
                  <div className={classes.ColorLabel}>Quantity</div>
                  <div className={classes.Space10} />
                  <div className={classes.ColorSelectedOption}>
                    <div className={classes.ColorSelectedOptionText}>{quantity}</div>
                    <div className={classes.SelectVerticalDivider} />
                    <div className={classes.QuantityArrows}>
                      <img src={arrowUp} style={{ width: 10, height: 10 }} onClick={() => setQuantity((e) => e + 1)} />
                      <img src={arrowUp} style={{ width: 10, height: 10, transform: `rotate(180deg)` }} onClick={() => setQuantity((e) => e - 1)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.Horizontal}>
                <div className={classes.Vertical}>
                  <div className={classes.DetailTitle}>Gears</div>
                  <div className={classes.Space10} />
                  <div className={classes.DetailDescription}>21 Speed</div>
                </div>
                <div className={classes.Vertical}>
                  <div className={classes.DetailTitle}>Tyre</div>
                  <div className={classes.Space10} />
                  <div className={classes.DetailDescription}>Tube Less</div>
                </div>
              </div>
              <div className={classes.BreakType}>
                <div className={classes.Vertical}>
                  <div className={classes.DetailTitle}>Break Type</div>
                  <div className={classes.Space10} />
                  <div className={classes.DetailDescription}>Disc</div>
                </div>
              </div>
              <div className={classes.CurrentPrice}>{product.price || "24,999 INR"}</div>
              <div className={classes.InitialPrice}>{product.initialPrice || "35, 999 INR"}</div>
              <div className={classes.Horizontal}>
                <button onClick={() => {}} className={classes.OrangeButton}>
                  Add to Cart
                </button>
                <div style={{ width: "10%" }} />
                <button onClick={() => {}} className={classes.OrangeButton}>
                  Proceed
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Link className={classes.ExploreMoreLink} to={"/shop"}>
        <img src={exploreIcon} />
      </Link>
    </motion.div>
  );
}

export default Order;
