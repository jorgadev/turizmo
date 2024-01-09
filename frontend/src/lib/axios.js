import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://api-dev.turizmo.pro/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export default axios
