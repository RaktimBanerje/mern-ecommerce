import axios from 'axios'

const orderApi = { 
    placeOrder: function (values){
        return axios.post('api/order/place-order', values)
    }
}

export default orderApi