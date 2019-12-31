import codemirrors from "@/components/codemirrors/codemirrors.vue";
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    activeName: "first",
    curCode: '',//练一练代码
    studyId: ''//当前课程的id
  }),
  computed: {
    ...mapGetters({
      studyInfo: "getStudyInfo",//学习内容
      studyParam: "getStudyParam"//学习的参数
    })
  },
  components: {
    codemirrors
  },
  mounted() {
    this.send();
    this.start();
  },
  methods: {
    //运行练一练代码
    send() {
      this.$refs.practice.contentWindow.document.write(this.curCode)
      this.$refs.practice.contentWindow.document.close()
    },
    //双向绑定代码内容
    changes(value) {
      this.curCode = value;
    },
    //获取学习课程id以及练一练代码内容
    start() {
      this.$refs.practice.contentWindow.document.write('')
      this.$refs.practice.contentWindow.document.close()
      this.studyId = this.studyParam.id;
      this.curCode = this.studyInfo.practiceCodeTemplate;
    },
    //查看练一练源代码
    checkCode() {
      this.curCode = this.studyInfo.practiceCode;
    }
  },
  beforeUpdate() {
    if (this.studyId != this.studyParam.id) {
      this.start();
    }
  },
};