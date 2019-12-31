import { mapGetters, mapActions } from "vuex";
import headers from "@/components/headers";
import footers from '@/components/footers';
export default {
  data() {
    return {  };
  },
  components: { headers, footers },
  computed: {
    ...mapGetters({
      userid: "getUserId"//用户id
    }),
    ...mapGetters({
      userinfo: "getUserInfo"//用户信息
    })
  },
  mounted() {
  },
  methods: {
    ...mapActions(["loginout","getStudyParam"]),
    handleClick(tab, event) {
    },
    handleSelect(key, keyPath) {
    },
    //继续学习按钮的触发
    async continueStudy() {
      let params = {
        id: this.userinfo.doingMin[this.userinfo.doingMin.length-1],
        minutiaTitle: this.userinfo.minName
      }
      //保存学习参数
      await this.getStudyParam(params)
      //跳转学习首页
      this.$router.push({
        path: '/study',
      })
    }
  }
};