import Axios from "axios";

export const getProducts = (category) => {
  let url = "";
  if (category === "all") {
    url = `http://192.168.100.150:5000/collection`;
  } else {
    url = `http://192.168.100.150:5000/collection/${category}`;
  }

  return {
    type: "GET_PRODUCTS",
    payload: Axios.get(url)
  };
};

export const getProductsDetail = (name) => {
  return {
    type: "GET_PRODUCTS_DETAIL",
    payload: Axios.get(`http://192.168.100.150:5000/product/${name}`)
  };
};

export const getProductsSearch = (name) => {
  return {
    type: "GET_SEARCH_PRODUCTS",
    payload: Axios.get(`http://192.168.100.150:5000/search/${name}`)
  };
};

export const getBranch = () => {
  return {
    type: "GET_BRANCH",
    payload: Axios.get(`http://192.168.100.150:5000/branch`)
  };
};
