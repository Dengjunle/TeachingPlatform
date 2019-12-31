import study from '@/request/study'

const actions = {
    //获取学习的课程信息
    async getStudyInfo(context,data){
        let result = await study.getStudyInfo(data)
        context.commit('SET_STUDYINFO',result)
    },
    //获取学习信息的参数
    async getStudyParam(context,data){
        let result = await study.getStudyInfo(data.id)
        context.commit('SET_STUDYPARAM',data)
        context.commit('SET_STUDYINFO',result)
    }
}

export default actions