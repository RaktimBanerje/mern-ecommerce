import axios from 'axios'

const cartApi = { 
    get: function(){
        return axios.get('/api/cart/get')
    },
    add: function(values){
        return axios.post('/api/cart/add', values)
    }
}

export default cartApi