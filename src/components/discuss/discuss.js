import { mapGetters } from "vuex";
export default {
  data() {
    return {
      textarea: "",//发表问题的输入内容
      input: "",//
      discuss: []//讨论列表
    };
  },
  computed: {
    ...mapGetters({
      userid: "getUserId"//用户id
    })
  },
  methods: {
    //获取讨论列表
    async getDiscuss() {
      let result = await this.$api.discuss.getDiscuss();
      result.forEach(item => {
        item.input = "";
      });
      this.discuss = result.reverse();
      
    },
    //发表问题
    async handleSend() {
      if (!this.textarea) {
        this.$message({
          message: "请输入内容",
          type: "warning"
        });
      } else {
        let params = {
          u_id: this.userid,
          content: this.textarea
        };
        let result = await this.$api.discuss.addSend(params);
        if (result === 1) {
          this.$message({
            message: "发表成功",
            type: "success"
          });
          this.textarea = "";
          this.getDiscuss();
        } else {
          this.$message.error("发表失败");
        }
      }
    },
    //回复评论
    async addReply(index) {
      let params = {
        pos_id: this.discuss[index].id,
        u_id: this.userid,
        content: this.discuss[index].input
      };
      let result = await this.$api.discuss.addReply(params);
      if (result === 1) {
          this.$message({
            message: "回复成功",
            type: "success"
          });
          this.discuss[index].input = "";
          this.getDiscuss();
        } else {
          this.$message.error("回复失败");
        }
    }
  },
  mounted() {
    this.getDiscuss();
  }
};