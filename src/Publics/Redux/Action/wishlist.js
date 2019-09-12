import Axios from "axios";

export const getWishlist = category => {
  let url = "";

  url = `http://192.168.100.150:5000/wishlist`;

  return {
    type: "GET_WISHLIST",
    payload: Axios.get(url)
  };
};

export const getWishlistDetail = name => {
  return {
    type: "GET_WISHLIST_DETAIL",
    payload: Axios.get(`http://192.168.100.150:5000/wishlist/${name}`)
  };
};

export const addWishlist = data => {
  return {
    type: "ADD_WISHLIST",
    payload: Axios.post(`http://192.168.100.150:5000/wishlist`, data)
  };
};

export const deleteWishlist = id => {
  return {
    type: "DELETE_WISHLIST",
    payload: Axios.delete(`http://192.168.100.150:5000/wishlist/${id}`)
  };
};

export const getWishlistSearch = name => {
  return {
    type: "GET_SEARCH_WISHLIST",
    payload: Axios.get(`http://192.168.100.150:5000/search/${name}`)
  };
};
