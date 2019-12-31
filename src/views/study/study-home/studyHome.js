import headers from "@/components/headers";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      activeName: "1",
      isCollapse: false,//展开或者收起侧边栏
      courseinfo: []//课程目录列表
    };
  },
  components: { headers },
  computed: {
    ...mapGetters({
      studyParam: "getStudyParam",//学习参数
      userid:"getUserId",//用户id
    })
  },
  methods: {
    ...mapActions(["getStudyInfo", "getStudyParam"]),
    handleSelect(key, keyPath) {
    },
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    //课程目录列表
    async getCourse() {
      let result = await this.$api.student.studentCourse();
      this.courseinfo = result;
    },
    //返回首页
    goBack() {
      this.$router.push({ path: "/student" });
    },
    //获取学习内容
    getStudyInfos() {
      this.getStudyInfo(this.studyParam.id);
    },
    //点击课程名称获取学习参数，切换对应内容
    goToStudy(data) {
      this.getStudyParam(data);
    },
    //添加学习中的状态
    start(){
        this.$api.study.addStudyStatu({stuId:this.userid,minId:this.studyParam.id})
    }
  },
  mounted() {
    this.getCourse();
    this.start()
  },
  created() {},
  beforeUpdate() {
      this.start();
  },
};