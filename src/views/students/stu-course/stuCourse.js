import collapseTab from '@/components/collapseTab';
import {mapGetters} from 'vuex';
import { isConditionalExpression } from 'typescript';
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
    async getCourse(){
      let result = await this.$api.student.studentCourse();
      let score = await this.$api.student.getStuCourse(this.userid)
      result.forEach((item)=>{
        item.show = false;
        item.minutiaList.forEach((itemMin)=>{
          score.forEach((scoreItem,index)=>{
            if(scoreItem.minId==itemMin.id){
              itemMin.score = scoreItem.score;
              score.splice(index,1)
            }
          })
        })
      })
      this.courseinfo = result;
    }
  },
  components:{"collapse-tab":collapseTab},
  mounted(){
    this.getCourse();
  }
};