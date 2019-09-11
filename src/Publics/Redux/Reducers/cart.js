const initialState = {
    addedCart: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false
};

const cart = (state = initialState, action) => {

    switch (action.type) {

        case 'GET_CART_PENDING':
            return {
                ...state,
                isloading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isloading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                addedCart: action.payload.data.response
            };

        case 'POST_CART_PENDING':
            return {
                ...state,
                isloading: true,
                    isRejected: false,
                    isFulfilled: false
            };
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isloading: false,
                    isRejected: true,
                    isFulfilled: false
            };
        case 'POST_CART_FULFILLED':
            state.addedCart.push(action.payload.data.response)
            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                addedCart: state.addedCart
            };
        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isloading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isloading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'DELETE_CART_FULFILLED':
            let filter = state.addedCart.findIndex(cart => {
                return cart.id === action.payload.data.response.id

            })
            let deleted = state.addedCart.splice(filter, 1);
            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                addedCart: deleted
            };

        default:
            return state;
    }
    

}

export default cart;