import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
import Navigation from "../Layout/Navigation";
import classes from "./Checkout.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const initialState = {
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  address: true,
};

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isValid, setIsValid] = useState(initialState);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    if (
      enteredName.length < 1 ||
      enteredLastName.length < 1 ||
      enteredEmail.length < 1 ||
      enteredPhone.length < 1 ||
      enteredAddress.length < 1
    )
      return;

    setLoading(true);
    setSubmited(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    dispatch(cartActions.clearCart());

    setTimeout(() => {
      navigate("/menu", { replace: true });
    }, 4000);
  };

  const firstNameChangeHandler = () => {
    const enteredName = firstNameInputRef.current.value;

    if (enteredName.length > 0) {
      setIsValid((prevState) => {
        let firstName = true;

        return { ...prevState, firstName };
      });
    }
  };

  const lastNameChangeHandler = () => {
    const enteredLastName = lastNameInputRef.current.value;

    if (enteredLastName.length > 0) {
      setIsValid((prevState) => {
        let lastName = true;

        return { ...prevState, lastName };
      });
    }
  };

  const emailChangeHandler = () => {
    const enteredEmail = emailInputRef.current.value;

    if (enteredEmail.length > 0) {
      setIsValid((prevState) => {
        let email = true;

        return { ...prevState, email };
      });
    }
  };

  const phoneChangeHandler = () => {
    const enteredPhone = phoneInputRef.current.value;

    if (enteredPhone.length > 0) {
      setIsValid((prevState) => {
        let phone = true;

        return { ...prevState, phone };
      });
    }
  };

  const addressChangeHandler = () => {
    const enteredAddress = addressInputRef.current.value;

    if (enteredAddress.length > 0) {
      setIsValid((prevState) => {
        let address = true;

        return { ...prevState, address };
      });
    }
  };

  const firstNameBlurHandler = () => {
    const enteredName = firstNameInputRef.current.value;

    if (enteredName.length < 1) {
      setIsValid((prevState) => {
        let firstName = false;

        return { ...prevState, firstName };
      });
    }
  };

  const lastNameBlurHandler = () => {
    const enteredLastName = lastNameInputRef.current.value;

    if (enteredLastName.length < 1) {
      setIsValid((prevState) => {
        let lastName = false;

        return { ...prevState, lastName };
      });
    }
  };

  const emailBlurHandler = () => {
    const enteredEmail = emailInputRef.current.value;

    if (enteredEmail.length < 1) {
      setIsValid((prevState) => {
        let email = false;

        return { ...prevState, email };
      });
    }
  };

  const phoneBlurHandler = () => {
    const enteredPhone = phoneInputRef.current.value;

    if (enteredPhone.length < 1) {
      setIsValid((prevState) => {
        let phone = false;

        return { ...prevState, phone };
      });
    }
  };

  const addressBlurHandler = () => {
    const enteredAddress = addressInputRef.current.value;

    if (enteredAddress.length < 1) {
      setIsValid((prevState) => {
        let address = false;

        return { ...prevState, address };
      });
    }
  };

  return (
    <Fragment>
      <Navigation />
      {!submited && (
        <div className={classes.checkout}>
          <form className={classes.form} onSubmit={formSubmitHandler}>
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                name="firstName"
                ref={firstNameInputRef}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                className={isValid.firstName === true ? "" : classes.error}
              />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                name="lastName"
                ref={lastNameInputRef}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                className={isValid.lastName === true ? "" : classes.error}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                ref={emailInputRef}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                className={isValid.email === true ? "" : classes.error}
              />
            </label>
            <label htmlFor="phone">
              Phone
              <input
                type="text"
                name="phone"
                ref={phoneInputRef}
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                className={isValid.phone === true ? "" : classes.error}
              />
            </label>
            <label htmlFor="address">
              Address
              <input
                type="text"
                name="address"
                ref={addressInputRef}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                className={isValid.address === true ? "" : classes.error}
              />
            </label>
            <button className={classes.submit} type="submit">
              Order
            </button>
          </form>
        </div>
      )}
      {submited && !loading && (
        <div className={classes.order}>
          <h1>Order Is Placed!</h1>
        </div>
      )}
      {loading && (
        <div className={classes.order}>
          <LoadingSpinner />
        </div>
      )}
    </Fragment>
  );
};

export default Checkout;
