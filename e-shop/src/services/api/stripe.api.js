import axios from 'axios'

const stripeApi = { 
    checkout: function (values){
        return axios.post('api/stripe/checkout', values)
    }
}

export default stripeApi