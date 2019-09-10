import Axios from "axios";

export const getProducts = status => {
  let url = "";
  if (status === "all") {
    url = "http://192.168.6.145:5000/collection/";
  } else {
    url = `http://192.168.6.145:5000/collection/${status}`;
  }

  return {
    type: "GET_PRODUCTS",
    payload: Axios.get(url)
  };
};
