import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav>
      <NavLink to="/menu" style={{ textDecoration: "none" }}>
        <h1 className={classes.title}>Foody</h1>
      </NavLink>
      <NavLink to="/cart" style={{ textDecoration: "none" }}>
        <button className={classes["nav-button"]}>
          Cart <span className={classes.quantity}>{totalQuantity}</span>
        </button>
      </NavLink>
    </nav>
  );
};

export default Navigation;
