import headers from "@/components/headers/headers.vue";
import footers from "@/components/footers/footers.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {},//答题信息
      isShow: false//是否已经答过题
    };
  },
  components: {
    headers,
    footers
  },
  computed: {
    ...mapGetters({
      userid: "getUserId"//用户id
    })
  },
  methods: {
    //提交章节测试答案
    onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          let params = {
            stu_id: this.userid,
            chap_id: this.$route.query.id * 1 + 1,
            score: 0,
            answer: ""
          };
          this.form.questionList.forEach((item, index) => {
            if (item.radio == item.answer) {
              params.score += 10;
            }
            if (this.form.questionList.length === index + 1) {
              params.answer += item.radio;
            } else {
              params.answer += item.radio + ",";
            }
          });
          let result = await this.$api.study.addStuTest(params);
          if (result == 1) {
            this.$message.success("提交成功");
            this.getStuTest();
          } else {
            this.$message.error("提交失败");
          }
        } else {
          return false;
        }
      });
    },
    //返回上一页
    back() {
      this.$router.back();
    },
    //重置选的答案
    resetForm() {
      this.$refs["form"].resetFields();
    },
    //获取章节测试题目列表
    async getStuTest() {
      let params = {
        stu_id: this.userid,
        chap_id: this.$route.query.id * 1 + 1
      };
      let result = await this.$api.student.getStuTest(params);
      result.questionList.forEach(item => {
        item.radio = "";
      });
      if (result.stuQuestion.chapId != "null") {
        this.isShow = true;
        result.stuQuestion.answerList.forEach((item, index) => {
          result.questionList[index].radio = item;
        });
      }
      this.form = result;
    }
  },
  mounted() {
    this.getStuTest();
  }
};