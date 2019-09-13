const initialState = {
  addedWishlist: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WISHLIST_PENDING":
      return {
        ...state,
        isloading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_WISHLIST_REJECTED":
      return {
        ...state,
        isloading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "GET_WISHLIST_FULFILLED":
      return {
        ...state,
        isloading: false,
        isFulfilled: true,
        addedWishlist: action.payload.data.response
      };

    case "ADD_WISHLIST_PENDING":
      return {
        ...state,
        isloading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "ADD_WISHLIST_REJECTED":
      return {
        ...state,
        isloading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "ADD_WISHLIST_FULFILLED":
      state.addedWishlist.push(action.payload.data.response);
      return {
        ...state,
        isloading: false,
        isFulfilled: true,
        addedWishlist: state.addedWishlist
      };
    case "DELETE_WISHLIST_PENDING":
      return {
        ...state,
        isloading: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_WISHLIST_REJECTED":
      return {
        ...state,
        isloading: false,
        isRejected: true,
        isFulfilled: false
      };
    case "DELETE_WISHLIST_FULFILLED":
      let filter = state.addedWishlist.findIndex(wishlist => {
        return wishlist.id === action.payload.data.response.id;
      });
      let deleted = state.addedWishlist.splice(filter, 1);
      return {
        ...state,
        isloading: false,
        isFulfilled: true,
        addedWishlist: deleted
      };

    default:
      return state;
  }
};

export default wishlist;
