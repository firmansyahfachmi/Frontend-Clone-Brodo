const initialState = {
    dataProducts : [],
    dataProductsDetail:[],
    isLoading : false,
    isFulfilled: false,
    isRejected:false
};

const products = (state = initialState, action) => {
    
    switch(action.type){

        case 'GET_PRODUCTS_PENDING' :
            return{
                ...state,
                isloading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'GET_PRODUCTS_REJECTED':
            return {
                ...state,
                isloading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'GET_PRODUCTS_FULFILLED':
            
            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                dataProducts: action.payload.data.response
            };
        case 'GET_PRODUCTS_DETAIL_PENDING':
            return {
                ...state,
                isloading: true,
                isRejected: false,
                isFulfilled: false
            };
        case 'GET_PRODUCTS_DETAIL_REJECTED':
            return {
                ...state,
                isloading: false,
                isRejected: true,
                isFulfilled: false
            };
        case 'GET_PRODUCTS_DETAIL_FULFILLED':

            return {
                ...state,
                isloading: false,
                isFulfilled: true,
                dataProductsDetail: action.payload.data.response
            };
        default: 
            return state;
    }   
    
}

export default products;