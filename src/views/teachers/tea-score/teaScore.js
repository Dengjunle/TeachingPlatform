export default {
    data() {
        return {
            tableData:[]
        }
    },
    methods: {
        //获取成绩统计表
        async getScore(){
            let result = await this.$api.teacher.getScore();
            this.tableData = result;
        }
    },
    mounted() {
        this.getScore()
    },
}