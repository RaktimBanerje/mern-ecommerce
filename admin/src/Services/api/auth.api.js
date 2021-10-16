import axios from 'axios'

const authApi = {
    login: function(data){
        return axios.post('/api/auth/admin/login', data)
    },

    register: function(data){
        return axios.post('/api/auth/admin/register', data)
    },

    authenticate: function(){ 
        return axios.get('/api/auth/admin/authenticate')
    },

    logout: function (){
        return axios.get('/api/auth/admin/logout')
    },

    forgotPassword: function(data){
        return axios.post('/api/auth/admin/forgot-password', data)
    }
}

export default authApi