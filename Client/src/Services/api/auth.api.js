import axios from 'axios'

const auth = {
    login: function(data){
        return axios.post('/api/auth/login', data)
    },

    register: function(data){
        return axios.post('/api/auth/register', data)
    },

    authenticate: function(){ 
        return axios.get('/api/auth/authenticate')
    }
}

export default auth