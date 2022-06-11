import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

import classes from "./Navbar.module.css";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/", label: "Home" },
];

function NavbarComponent() {
  const { pathname } = useLocation();

  return (
    <div className={classes.MainContainer}>
      <img className={classes.Logo} src={logo} />
      <div className={classes.InnerContainer}>
        {LINKS.map((link) => (
          <Link key={link.href} to={link.href} className={pathname === link.href ? classes.NavbarLinkActive : classes.NavbarLinkInActive}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavbarComponent;
