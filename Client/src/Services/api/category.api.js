import axios from 'axios'

const categoryApi = { 
    getAll: function(){
        return axios.get('/api/category/get')
    }
}

export default categoryApi