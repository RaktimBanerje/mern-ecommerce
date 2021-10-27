import axios from 'axios' 

const orderApi = {   
    getAll: function(){
        return axios.get('/api/order')
    },
    get: function(values){
        return axios.get(`/api/order/?orderId=${values}`)
    }
}

export default orderApi