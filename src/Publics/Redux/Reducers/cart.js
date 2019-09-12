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
                addedCart: [...state.addedCart]
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
            let new_items= state.addedCart.filter(cart => {
                return Number(cart.id) !== Number(action.payload.data.response)

            })

            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                addedCart:new_items
            };

        default:
            return state;
    }
    

}

export default cart;