import {mapGetters,mapActions} from 'vuex';
export default {
  data() {
    return {
      courseinfo:[]
    };
  },
  computed: {
    ...mapGetters({
      userid: "getUserId"
    }),
  },
  methods: {
    ...mapActions(['getStudyParam']),
    async getCourse(){
      let result = await this.$api.student.studentCourse();
      result.forEach((item)=>{
        item.show = false;
      })
      this.courseinfo = result;
    },
    async goToGrades(items){
        await this.getStudyParam(items)
        this.$router.push({
            path:"/teacher/grades",
            query:{
                id:items.id
            }
        })
    }
  },
  mounted(){
    this.getCourse();
  }
};