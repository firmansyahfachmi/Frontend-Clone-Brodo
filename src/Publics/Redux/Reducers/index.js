import { combineReducers } from "redux";

import products from "./products.js";
import cart from "./cart.js";
import wishlist from "./wishlist";

const rootReducers = combineReducers({
  products,
  cart,
  wishlist
});

export default rootReducers;
