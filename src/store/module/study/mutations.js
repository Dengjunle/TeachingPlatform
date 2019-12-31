
const mutations = {
    //保存学习信息的课程
    SET_STUDYINFO(state,studyinfo){
        state.studyinfo = studyinfo;
        sessionStorage.setItem("studyinfo",JSON.stringify(studyinfo))
    },
    //保存学习信息的参数
    SET_STUDYPARAM(state,studyparam){
        state.studyparam = studyparam;
        sessionStorage.setItem("studyparam",JSON.stringify(studyparam))
    }
}

export default mutations;