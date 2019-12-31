import codemirrors from "@/components/codemirrors/codemirrors.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeName: "first",
      activeTab: "stuList",
      notSubmittedList: [],
      submittedList: [],
      scoredList: [],
      activeIframe: "first",
      curCode: "", //代码
      input: "",
      stuData: {}
    };
  },
  components: {
    codemirrors
  },
  computed: {
    ...mapGetters({
      studyParam: "getStudyParam", //学习参数
      userid: "getUserId" //用户id
    })
  },
  watch:{
    $route(newName,oleName){
      if(oleName!=this.$route.path){
        this.getSubmit();
      }
    }
  },
  methods: {
    //返回上一页
    back() {
      this.$router.back();
    },
    handleClick(tab, event) {
    },
    handleClicks(tab, event) {
    },
    goToTask(item) {
      this.stuData = item;
      this.curCode = item.homework.context;
      this.input = '';
      this.activeTab = "stuScore";
    },
    async getSubmit() {
      let id = this.$route.query.id;
      let notSubmittedList = await this.$api.teacher.notSubmitted(id);
      let submittedList = await this.$api.teacher.submitted(id);
      let scoredList = await this.$api.teacher.scored(id);
      this.notSubmittedList = notSubmittedList;
      this.submittedList = submittedList;
      this.scoredList = scoredList;
    },
    //运行案例代码
    send() {
      this.$refs.task.contentWindow.document.write(this.curCode);
      this.$refs.task.contentWindow.document.close();
    },
    //双向绑定代码内容
    changes(value) {
      this.curCode = value;
    },
    async addScore() {
      if (this.input >= 0 && this.input <= 100) {
        let params = {
          stuId: this.stuData.id,
          score: this.input,
          minId: this.stuData.homework.minId
        };
        let result = await this.$api.teacher.addScore(params);
        if (result == 1) {
          this.$message({
            type: "success",
            message: "提交成功！"
          });
          this.activeTab="stuList"
          this.getSubmit();
        } else {
          this.$message({
            type: "error",
            message: "提交失败！"
          });
        }
      } else {
        this.$message({
          type: "info",
          message: "请输入小于100大于0的分数"
        });
      }
    }
  },
  mounted() {
    this.getSubmit();
  }
};