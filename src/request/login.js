import axios from './http';
import {BASE} from './config';
const user = {
    login(params){
        return axios.post(`${BASE}/UserLoginServlet`,{
            ...params
        })
    }
}

export default user;