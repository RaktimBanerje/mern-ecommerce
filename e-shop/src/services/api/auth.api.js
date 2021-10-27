import axios from 'axios'

const authApi = {
    getUser: function(){
        return axios.get('/api/auth/customer')
    },
    login: function(data){
        return axios.post('/api/auth/customer/login', data)
    },

    register: function(data){
        return axios.post('/api/auth/customer/register', data)
    },

    authenticate: function(){ 
        return axios.get('/api/auth/customer/authenticate')
    },

    logout: function (){
        return axios.get('/api/auth/customer/logout')
    },

    forgotPassword: function(data){
        return axios.post('/api/auth/customer/forgot-password', data)
    }
}

export default authApi