import axios from 'axios'

const cartApi = { 
    get: function(){
        return axios.get('/api/cart/get')
    },
    add: function(values){
        return axios.post('/api/cart/add', values)
    },
    increment: function({productId, qty}){
        return axios.patch(`/api/cart/increment/?productId=${productId}&qty=${qty}`)
    },
    remove: function (productId){
        return axios.delete(`/api/cart/remove/${productId}`)
    }
}

export default cartApi