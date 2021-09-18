import axios from 'axios' 

const product = {
    getAll: function(){ 
        return axios.get('/api/product')
    }
}

export default product