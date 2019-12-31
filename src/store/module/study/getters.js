const getters = {
    //获取学习的课程信息
    getStudyInfo(state){
        return state.studyinfo
    },
    //获取学习信息的参数
    getStudyParam(state){
        return state.studyparam
    }
}

export default getters;