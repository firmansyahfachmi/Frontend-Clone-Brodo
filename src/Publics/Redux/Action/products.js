import Axios from 'axios'

export const getProducts = (status) => {
    let url = '';
    if(status === 'new product'){
        url = `http://192.168.6.145:5000/status/${status}`
    }else if(status === 'best seller'){
        url = `http://192.168.6.145:5000/status/${status}`
    }else{
        url = 'http://192.168.6.145:5000/collection'
    }

    return{
        type: 'GET_PRODUCTS',
        payload: Axios.get(url)
    }
}