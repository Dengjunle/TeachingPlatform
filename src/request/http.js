import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
// axios.defaults.baseUrl = 'http://localhost:8082/student';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        //得到请求的方式和请求体数据
        const {method,data} = config;
        //处理post请求，将data对象转换成query参数格式字符串
        if(method.toLowerCase() === 'post' && typeof data === 'object'){
            config.data = qs.stringify(data);
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {   
        return Promise.resolve(response.data)
    },
    error => {
        console.log('error',error);
        return Promise.reject(error)
    }
);

export default axios;