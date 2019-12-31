//相当于store的计算属性
const getters = {
    //获取用户id
    getUserId(state){
        return state.userid
    },
    //获取用户信息
    getUserInfo(state){
        return state.userinfo
    }
}

export default getters;