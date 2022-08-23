import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navigation from "./Navigation";
import classes from "./Header.module.css";
import MealsList from "../Meals/MealsList";
import { cartActions } from "../../store/cart";

const Header = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.display);

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  if (item.name === "Preview") {
    return (
      <Fragment>
        <Navigation />
        <header className={`${classes.preview} ${classes.cover}`}></header>
        <h1 className={classes.heading}>Our Menu</h1>
        <MealsList />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navigation />
      <header>
        <img className={classes.image} src={item.image} alt="food" />

        <div>
          <h1 className={classes.title}>{item.name}</h1>
          <h2 className={classes.price}>${item.price}</h2>
          <p>{item.description}</p>
          <div className={classes.test}>
            <button className={classes.btn} onClick={addToCartHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </header>
      <h1 className={classes.heading}>Our Menu</h1>
      <MealsList />
    </Fragment>
  );
};

export default Header;
