import codemirrors from "@/components/codemirrors/codemirrors.vue";
import {mapGetters} from 'vuex';
export default {
  data: () => ({
    show3: false,//是否显示视频内容
    activeName:"first",
    curCode:'',//案例代码
    studyId:''//当前课程的id
  }),
  components: {
    codemirrors
  },
  computed: {
    ...mapGetters({
      studyInfo:"getStudyInfo",//学习内容
      studyParam: "getStudyParam"//学习的参数
    })
  },
  mounted() {
    this.start();
  },
  methods: {
    //运行案例代码
    send(){
      this.$refs.anli.contentWindow.document.write(this.curCode)
      this.$refs.anli.contentWindow.document.close()
    },
    //双向绑定代码内容
    changes(value){
      this.curCode = value;
    },
    //获取当前学习内容的id以及案例的代码
    start(){
      this.studyId = this.studyParam.id;
      this.curCode=this.studyInfo.anLi.topic;
    }
  },
  beforeUpdate() {
    if(this.studyId != this.studyParam.id){
      this.start();
    }
  },
};