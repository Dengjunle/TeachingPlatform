export default {
    data() {
      return {
        tableData: []//下载资源列表
      };
    },
    methods: {
        //获取资源列表
      async getResources() {
        let result = await this.$api.resources.getResources();
        this.tableData = result;
      }
    },
    mounted() {
      this.getResources();
    }
  };