import axios from './http';
import {BASE} from './config';

const study = {
    //获取学习首页的四个步骤的信息
    getStudyInfo(id=0){
        return axios.post(`${BASE}/PageServlet`,{
            id
        })
    },
    //提交代码
    addCode(params){
        return axios.post(`${BASE}/StudentSaveHomeworkServlet`,{
            ...params
        })
    },
    //添加学生的学习状态
    addStudyStatu(params){
        return axios.post(`${BASE}/StudentStateToDoingByIdServlet`,{
            ...params
        })
    },
    //提交章节测试
    addStuTest(params){
        return axios.post(`${BASE}/InsertStuQuestionServlet`,{
            ...params
        })
    }
}

export default study;