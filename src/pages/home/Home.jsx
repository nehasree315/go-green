import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { SHOWCASE } from "../../constants/mocks";
import exploreIcon from "../../assets/explore.svg";
import detailIcon from "../../assets/detail.svg";
import brakeIcon from "../../assets/brake.png";
import seatIcon from "../../assets/seat.png";

import classes from "./Home.module.css";

function Home() {
  const [selectedModel, setSelectedModel] = React.useState(SHOWCASE[0]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showSeat, setShowSeat] = React.useState(false);
  const [showBreak, setShowBreak] = React.useState(false);
  const [showTyre, setShowTyre] = React.useState(false);

  const handleOrderNow = () => {
    navigate("/order", { state: { product: selectedModel } });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delayChildren: 1, duration: 1 } }} exit={{ opacity: 0 }} className={classes.MainContainer}>
      <div className={classes.BgContainer} />

      <div className={classes.InnerContainer}>
        <AnimatePresence>
          <motion.div
            key={pathname}
            initial={{ x: -window.innerWidth }}
            animate={{ x: 0, transition: { duration: 2 } }}
            exit={{ x: -window.innerWidth, transition: { duration: 2 } }}
            className={classes.InnerDetailsSection}
          >
            <div className={classes.Title}>{selectedModel.title}</div>
            <div className={classes.Description}>{selectedModel.description}</div>
            <div className={classes.Price}>
              <span className={classes.PriceLabel}>Price : </span> {selectedModel.price}
            </div>
            <div className={classes.Space} />
            <button type="button" className={classes.OrderButton} onClick={handleOrderNow}>
              Order Now
            </button>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={pathname}
            initial={{ x: window.innerWidth }}
            animate={{ x: 0, transition: { duration: 2 } }}
            exit={{ x: window.innerWidth, transition: { duration: 2 } }}
            className={classes.InnerImageSection}
            style={{ position: "relative" }}
          >
            <div style={{ position: "absolute", zIndex: 2, top: -255, left: 190 }}>
              <AnimatePresence>
                {showSeat && (
                  <motion.div
                    onClick={() => setShowSeat(() => !showSeat)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: "absolute", display: "flex", flexDirection: "column", zIndex: 3, top: -60, left: -160 }}
                  >
                    <img src={seatIcon} alt="detail" style={{ marginBottom: 10 }} />
                    <span className={classes.DetailLabel}>Fully Fabric Leather Seat</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <img className="" src={detailIcon} alt="detail" onClick={() => setShowSeat(() => !showSeat)} />
            </div>
            <div style={{ position: "absolute", zIndex: 2, top: 85, left: 145 }}>
              <AnimatePresence>
                {showBreak && (
                  <motion.div
                    onClick={() => setShowBreak(() => !showBreak)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: "absolute", display: "flex", flexDirection: "column", zIndex: 3, top: -60, left: -150 }}
                  >
                    <img src={brakeIcon} alt="detail" style={{ marginBottom: 10 }} />
                    <span className={classes.DetailLabel}>21 speed Gears System</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <img className="" src={detailIcon} alt="detail" onClick={() => setShowBreak(() => !showBreak)} />
            </div>
            <AnimatePresence>
              <motion.img key={selectedModel.image} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} src={selectedModel.image} className={classes.InnerImage} />
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
        <div className={classes.InnerProductSelect}>
          <div className={classes.DotContainer}>
            {SHOWCASE.map((product) => (
              <img src={product.dot} className={classes.Dot} onClick={() => setSelectedModel(product)} />
            ))}
          </div>
        </div>
      </div>

      <Link className={classes.ExploreMoreLink} to={"/shop"}>
        <img src={exploreIcon} />
      </Link>
    </motion.div>
  );
}

export default Home;
