import Axios from 'axios'

export const getProducts = () => {
    return{
        type: 'GET_PRODUCTS',
        payload: Axios.get('http://192.168.6.145:5000/collection')
    }
}