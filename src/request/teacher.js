import axios from './http';
import {BASE} from './config';

const teacher = {
    //老师信息
    teacherInfo(teaId){
        return axios.post(`${BASE}/TeacherInit`,{
            teaId
        })
    },
    //获取成绩统计
    getScore(){
        return axios.post(`${BASE}/getAllStudentScoreServlet`)
    },
    //未提交的学生
    notSubmitted(minId){
        return axios.post(`${BASE}/TeacherGetStudentList`,{
            minId
        })
    },
    //已提交的学生
    submitted(minId){
        return axios.post(`${BASE}/getUncorrectedHomeworkServlet`,{
            minId
        })
    },
    //已评分的学生
    scored(minId){
        return axios.post(`${BASE}/getCorrectHomeworkServlet`,{
            minId
        })
    },
    //批改成绩
    addScore(params){
        return axios.post(`${BASE}/TeacherUpdateHomeworkScoreServlet`,{
            ...params
        })
    } 
}

export default teacher;