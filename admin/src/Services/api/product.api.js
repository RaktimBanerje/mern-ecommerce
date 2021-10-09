import axios from 'axios' 

const productApi = {   
    add: function(values){ 
        return axios.post('/api/product/add', values)
    },
    getAll: function(){
        return axios.get('/api/product/get')
    },
    getProductById: function(id){
        return axios.get(`/api/product/get/${id}`)
    },
    delete: function(id){
        return axios.get(`/api/product/delete/${id}`)
    }
}

export default productApi