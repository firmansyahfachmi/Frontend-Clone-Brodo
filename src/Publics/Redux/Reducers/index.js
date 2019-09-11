import { combineReducers } from "redux";

import products from "./products.js";
import cart from "./cart.js";

const rootReducers = combineReducers({
  products,
  cart
});

export default rootReducers;
