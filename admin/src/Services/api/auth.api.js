import axios from 'axios'

const authApi = {
    login: function(data){
        return axios.post('/api/auth/login', data)
    },

    register: function(data){
        return axios.post('/api/auth/register', data)
    },

    authenticate: function(){ 
        return axios.get('/api/auth/authenticate')
    },

    logout: function (){
        return axios.get('/api/auth/logout')
    },

    forgotPassword: function(data){
        return axios.post('/api/auth/forgot-password', data)
    }
}

export default authApi