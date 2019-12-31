import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      type:'student'
    };
  },
  components: {},
  computed: {
      ...mapGetters({
          userid:'getUserId',
          userinfo:'getUserInfo'
      }),
  },
  mounted(){
      if(this.$route.path.indexOf('teacher')!=-1){
        this.type = 'teacher';
      }
  },
  methods: {
      ...mapActions(['getUserInfo','loginout']),
      loginOut(){
          this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loginout();
          this.$router.push('/');
        }).catch(() => {         
        });
      }
  },
};