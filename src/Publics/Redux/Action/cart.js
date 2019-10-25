import Axios from 'axios'

export const getCart = () => {
    return {
        type: "GET_CART",
        payload: Axios.get(`http://192.168.6.145:5000/cart`)
    };
};

export const postCart = data => {
    return {
        type: "POST_CART",
        payload: Axios.post(`http://192.168.6.145:5000/cart`, data)
    };
};

export const deleteCart = (id) => {
    return {
        type: "DELETE_CART",
        payload: Axios.delete(`http://192.168.6.145:5000/cart/${id}`)
    };
};