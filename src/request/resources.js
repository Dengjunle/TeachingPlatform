import axios from './http'
import {BASE} from './config'

const resources = {
    getResources(){
        return axios.post(`${BASE}/getAllUrlServlet`)
    }
}

export default resources;