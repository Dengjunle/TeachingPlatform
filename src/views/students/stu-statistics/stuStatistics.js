import { mapGetters } from "vuex";
import echarts from "echarts";
export default {
  data() {
    return {
      //成绩列表的第一行内容
      tableData: [
        {
          title: "所占权重",
          courseNum: "30%",
          task: "30%",
          chapter: "40%",
          achievement: "100%"
        }
      ],
      chartCount: null,//课后作业汇总
      chartCourse:null,//章节测验汇总
      statistics: {}//成绩列表的信息
    };
  },
  computed: {
    ...mapGetters({
      userid: "getUserId"//用户id
    })
  },
  methods: {
    //获取成绩列表的信息
    async getStatistics() {
      let result = await this.$api.statistics.getStatistics(this.userid);
      this.statistics = result;
      let params = {
        title: "成绩",
        courseNum: ((result.finishedMinCount / 25) * 30).toFixed(2),
        task: ((result.homeworkAvgScore / 2500) * 30).toFixed(2),
        chapter: ((result.questionAvgScore / 1000) * 40).toFixed(2),
        achievement: (
          (result.finishedMinCount / 25) * 30 +
          (result.homeworkAvgScore / 2500) * 30 +
          (result.questionAvgScore / 1000) * 40
        ).toFixed(2)
      };
      this.tableData.push(params);
      this.drawCount();
      this.drawCourse();
    },
    //绘制课后作业汇总折线图
    drawCount() {
      this.chartCount = echarts.init(
        document.getElementById("chartCount"),
        "light"
      );
      this.chartCount.setOption({
        title: { text: "课后作业汇总" },
        tooltip: {},
        xAxis: {
          type: "category",
          name: "章节",
          data: [
            "1.1",
            "1.2",
            "2.1",
            "2.2",
            "2.3",
            "2.4",
            "3.1",
            "3.2",
            "3.3",
            "4.1",
            "4.2",
            "4.3",
            "5.1",
            "5.2",
            "6.1",
            "6.2",
            "7.1",
            "7.2",
            "8.1",
            "8.2",
            "8.3",
            "9.1",
            "9.2",
            "9.3",
            "10.1"
          ]
        },
        yAxis: {
          type: "value",
          name: "分数"
        },
        series: [
          {
            data: this.statistics.homeworkScore,
            type: "line"
          }
        ]
      });
    },
    //绘制章节测验汇总折线图
    drawCourse() {
      this.chartCourse = echarts.init(
        document.getElementById("chartCourse"),
        "light"
      );
      this.chartCourse.setOption({
        title: { text: "章节测验汇总" },
        tooltip: {},
        xAxis: {
          type: "category",
          name: "章节",
          data: ['第1章', '第2章', '第3章', '第4章', '第5章', '第6章', '第7章', '第8章', '第9章', '第10章']
        },
        yAxis: {
          type: "value",
          name: "分数"
        },
        series: [
          {
            data: this.statistics.questionScore,
            type: "line"
          }
        ]
      });
    }
  },
  mounted() {
    this.getStatistics();
  }
};