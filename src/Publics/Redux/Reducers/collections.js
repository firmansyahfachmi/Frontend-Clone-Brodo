const initialState = {
  dataCollections: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const collections = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLLECTIONS_PENDING":
      return {
        ...state,
        isloading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_COLLECTIONS_REJECTED":
      return {
        ...state,
        isloading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_COLLECTIONS_FULFILLED":
      return {
        ...state,
        isloading: false,
        isFulfilled: true,
        dataCollections: action.payload.data.response
      };
    default:
      return state;
  }
};

export default collections;
