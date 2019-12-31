import axios from './http';
import {BASE} from './config';

const statistics = {
    getStatistics(id){
        return axios.post(`${BASE}/getStudentScoreByIdServlet`,{
            id
        })
    }
}

export default statistics;