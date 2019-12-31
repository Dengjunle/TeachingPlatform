import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      innerVisible: false,
      page_url: '',
      title:''
    };
  },
  computed: {
    ...mapGetters({
      userinfo: "getUserInfo"
    })
  },
  methods: {
    ...mapActions(['getStudyParam']),
    //本章概述
    handleShowModal(item) {
      this.title = item.chapterTitle;
      this.page_url = item.page_url;
      this.innerVisible = true;
    },
    //跳学习首页
    async goToStudy(data) {
      await this.getStudyParam(data)
      this.$router.push({
        path: '/study',
      })
    },
    //跳章节测试页面
    goToTest(items) {
      this.$router.push({
        path: '/stu-test',
        query: {
          id: items.chapterId
        }
      })
    }
  },
  props: {
    courseinfo: Array
  },
};