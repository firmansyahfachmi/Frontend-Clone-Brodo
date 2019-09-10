import Axios from "axios";

export const getCollections = page => {
  let url = `http://192.168.6.145:5000/collection/page/${page}`;
  // if (page === "page") {
  //   url = `http://192.168.6.145:5000/collection/${page}`;
  // } else {
  //   url = "http://192.168.6.145:5000/collection";
  // }

  return {
    type: "GET_COLLECTIONS",
    payload: Axios.get(url)
  };
};
