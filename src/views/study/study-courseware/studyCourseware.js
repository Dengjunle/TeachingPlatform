import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters({
       studyInfo:"getStudyInfo"//学习ppt内容
    })
  }
}