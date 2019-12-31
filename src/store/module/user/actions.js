//类似mutation，但是调用mutation的方法
import user from '@/request/login';
import student from '@/request/student'
import teacher from '@/request/teacher'
const actions = {
    //登录
    async login(context,data){
        let response = await user.login(data);
        context.commit('LOGIN_IN',response);
    },
    //获取用户信息
    async getUserInfo(context,data){
        let response = {};
        if(data.type == 'student'){
            response = await student.studentInfo(data.userid)
        }else if(data.type == 'teacher'){
            response = await teacher.teacherInfo(data.userid)
        }
        context.commit('SET_USERINFO',response)
    },
    //退出登录
    loginout(context,data){
        context.commit('LOGIN_OUT')
    }
}

export default actions