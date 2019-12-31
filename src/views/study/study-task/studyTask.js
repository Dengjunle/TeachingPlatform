import codemirrors from "@/components/codemirrors/codemirrors.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  data: () => ({
    show3: false,
    activeName: "first",
    curCode: '',//作业代码
    studyId: ''//当前课程的id
  }),
  computed: {
    ...mapGetters({
      studyInfo: "getStudyInfo",//学习内容
      studyParam: "getStudyParam",//学习的参数
      userid: "getUserId",//用户id
      userinfo: "getUserInfo"//用户信息
    })
  },
  components: {
    codemirrors
  },
  mounted() {
    this.start();
    this.send();
  },
  methods: {
    ...mapActions(['getUserInfo']),
    //运行作业代码
    send() {
      this.$refs.task.contentWindow.document.write(this.curCode)
      this.$refs.task.contentWindow.document.close()
    },
    //双向绑定代码内容
    changes(value) {
      this.curCode = value;
    },
    //获取学习课程id以及作业代码内容，运行展示作业效果
    start() {
      this.$refs.modular.contentWindow.document.write(this.studyInfo.topic)
      this.$refs.modular.contentWindow.document.close()
      this.studyId = this.studyParam.id;
      this.curCode = this.studyInfo.codeTemplate;
    },
    //提交作业代码
    submission() {
      this.$alert('你确定提交吗？', '温馨提示：不可重复提交哦！', {
        confirmButtonText: '确定',
        callback: async () => {
          let params = {
            stuId: this.userid,
            minId: this.studyParam.id,
            context: this.curCode
          }
          let result = await this.$api.study.addCode(params);
          if (result == 1) {
            this.$message({
              type: 'success',
              message: '提交成功！'
            });
            this.getUserInfo(this.userid);
          }

        }
      });
    }
  },
  beforeUpdate() {
    if (this.studyId != this.studyParam.id) {
      this.start();
    }
  },
};