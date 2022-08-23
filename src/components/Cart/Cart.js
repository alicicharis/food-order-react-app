import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Navigation from "../Layout/Navigation";
import classes from "./Cart.module.css";
import { cartActions } from "../../store/cart";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const increaseQuantity = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  const removeFromCart = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  return (
    <Fragment>
      <Navigation />
      <div className={classes.container}>
        {items.map((item) => (
          <div key={item.id} className={classes.cart}>
            <img
              className={classes["cart-image"]}
              src={item.image}
              alt="food"
            />
            <h2>{item.name}</h2>

            <div className={classes.quantity}>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              {/* <span>{item.quantity}</span> */}
              <button onClick={() => increaseQuantity(item)}>+</button>
            </div>
            <h3 className={classes.price}>${item.totalPrice.toFixed(2)}</h3>
            <h3 className={classes.x} onClick={() => removeFromCart(item.id)}>
              X
            </h3>
          </div>
        ))}
        {totalQuantity > 0 && (
          <div className={classes.total}>
            <h2 className={classes.prajs}>
              Total Price: ${totalPrice.toFixed(2)}
            </h2>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <button className={classes.checkout}>Checkout</button>
            </Link>
          </div>
        )}

        {totalQuantity === 0 && (
          <div className={classes["total-empty"]}>
            <h1 className={classes.empty}>Your Cart Is Empty!</h1>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
