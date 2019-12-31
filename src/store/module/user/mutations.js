
const mutations = {
    //存储用户的信息
    LOGIN_IN(state,userid){
        state.userid = userid;
        sessionStorage.setItem("userid",userid)
    },
    //退出登录，清空用户信息
    LOGIN_OUT(state){
        state.userid=null;
        state.userinfo={}
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("userinfo");
    },
    //存储用户信息
    SET_USERINFO(state,userinfo){
        state.userinfo = userinfo;
        sessionStorage.setItem("userinfo",JSON.stringify(userinfo))
    }
}

export default mutations;