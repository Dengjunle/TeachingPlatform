import axios from './http';
import {BASE} from './config';

const register = {
    //检查用户名是否已经有人用
    checkUsername(username){
        return axios.post(`${BASE}/RegisterCheckUsername`,{
            username
        })
    },
    //检查学号是否已经有人用
    checkId(stuId){
        return axios.post(`${BASE}/RegisterCheckId`,{
            stuId
        })
    },
    //注册
    userRegister(params){
        return axios.post(`${BASE}/UserRegisterServlet`,{
            ...params
        })
    },
}

export default register;