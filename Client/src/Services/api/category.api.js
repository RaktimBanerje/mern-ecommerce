import axios from 'axios'

const category = { 
    getAll: function(){
        return axios.get('/api/category/get')
    }
}

export default category