<template>
  <div>
      <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          平均分：作业成绩平均分=总任务分数/总任务数;&nbsp;&nbsp;章节成绩平均分=总章节分数/总章节数;		
        </div>
      </el-col>
    </el-row>
    <el-table :data="tableData" highlight-current-row border  style="width: 100%">
      <el-table-column type="index" width="100" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="学生姓名" width="180" align="center">
      </el-table-column>
      <el-table-column prop="id" label="学号" width="250" align="center"> </el-table-column>
      <el-table-column prop="finishedMinCount" label="任务完成数" align="center"> </el-table-column>
      <el-table-column label="作业成绩平均分" align="center">
          <template slot-scope="scope">
            <span>{{ (scope.row.homeworkAvgScore/25).toFixed(2) }}</span>
          </template>
      </el-table-column>
      <el-table-column prop="questionAvgScore" label="章节成绩平均分" align="center">
          <template slot-scope="scope">
            <span>{{ (scope.row.questionAvgScore/10).toFixed(2) }}</span>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import teaScore from './teaScore';
export default teaScore;
</script>

<style lang="scss" scoped>
@import './teaScore';
</style>