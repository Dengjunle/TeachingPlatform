import axios from './http';
import { BASE } from './config';

const student = {
  studentInfo(id) {
    return axios.post(`${BASE}/StudentInitServlet`, {
      id
    })
  },
  studentCourse(){
    return axios.post(`${BASE}/ChapterServlet`)
  },
  getStuCourse(id){
    return axios.post( `${BASE}/StudentGetHomeworkListServlet`,{
      id
    })
  },
  getStuTest(params){
    return axios.post(`${BASE}/GetQuestionServlet`,{
      ...params
    })
  }
  
}

export default student;