const initialState = {
    addedCart: [],
    total: 0,
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

            let existed_item = state.addedCart.find(cart => Number(action.payload.data.response.id) === Number(cart.id))

            if (existed_item) {

                return {
                    ...state,
                    total: state.total + action.payload.data.response.price
                }
            } else {

                let newTotal = state.total + action.payload.data.response.price

                state.addedCart.push(action.payload.data.response)
                return {
                    ...state,
                    isloading: false,
                    isFulfilled: true,
                    addedCart: [...state.addedCart],
                    total: newTotal
                };
            }
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
                let find = state.addedCart.filter(cart => {
                    return Number(cart.id) === Number(action.payload.data.response)
                })

                let min = Number(state.total) - Number(find[0].price)

                let new_items = state.addedCart.filter(cart => {
                    return Number(cart.id) !== Number(action.payload.data.response)

                })


                return {
                    ...state,
                    isloading: false,
                        isFulfilled: true,
                        addedCart: new_items,
                        total: min

                };

            default:
                return state;
    }


}

export default cart;