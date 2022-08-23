import { configureStore } from "@reduxjs/toolkit";

import displayReducer from "./display";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { display: displayReducer, cart: cartReducer },
});

export default store;
