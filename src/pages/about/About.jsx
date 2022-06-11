import React from "react";

import classes from "./About.module.css";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={classes.MainContainer}>
      <img src={logo} width="40%" />
    </motion.div>
  );
}

export default About;
