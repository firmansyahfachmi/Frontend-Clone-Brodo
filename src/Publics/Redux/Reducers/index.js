import { combineReducers } from "redux";

import products from "./products.js";
import collections from "./collections";

const rootReducers = combineReducers({
  products,
  collections
});

export default rootReducers;
