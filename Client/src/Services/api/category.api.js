import axios from 'axios'

const categoryApi = { 
    add: function(values){
        return axios.post('/api/category/add', values)
    },
    getAll: function(){
        return axios.get('/api/category/get')
    },
    getParent: function(){
        return axios.get('/api/category/get-parent')
    }
}

export default categoryApi