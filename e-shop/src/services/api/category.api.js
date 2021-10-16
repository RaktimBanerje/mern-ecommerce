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
    },
    getChildParent: function(){
        return axios.get('/api/category/get-child-parent')
    },
    edit: function(values){
        return axios.post('/api/category/edit', values)
    },
    delete: function(values){
        return axios.post('/api/category/delete', values)
    },
    refreshCategoryList: function(){
        return Promise.all([this.getAll(), this.getParent(), this.getChildParent()])
    }
}

export default categoryApi