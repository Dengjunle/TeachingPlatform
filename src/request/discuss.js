import axios from './http';
import { BASE } from './config';

const discuss = {
    getDiscuss() {
        return axios.post(`${BASE}/PostingServlet`)
    },
    addSend(params) {
        return axios.post(`${BASE}/addPostingServlet`, {
            ...params
        })
    },
    addReply(params){
        return axios.post(`${BASE}/addReturnServlet`, {
            ...params
        })
    }
}

export default discuss;