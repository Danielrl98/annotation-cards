import Axios from 'axios'

const api = Axios.create({

    baseURL: 'http://localhost:3334'
})
export default api