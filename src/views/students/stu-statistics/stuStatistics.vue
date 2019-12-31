<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          成绩：课后作业成绩=总任务分数/总任务数×30%;&nbsp;
          &nbsp;章节测验成绩=总章节分数/总章节数×40%;
        </div>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="考核内容" width="180">
      </el-table-column>
      <el-table-column prop="courseNum" label="章节完成数" width="180">
      </el-table-column>
      <el-table-column prop="task" label="课后作业"> </el-table-column>
      <el-table-column prop="chapter" label="章节测验"> </el-table-column>
      <el-table-column prop="achievement" label="总成绩"> </el-table-column>
    </el-table>
    <div id="chartCount" class="chartCount" ></div>
    <div id="chartCourse" class="chartCourse" ></div>
  </div>
</template>

<script>
import stuStatistics from './stuStatistics';
export default stuStatistics;
</script>

<style lang="scss" scoped>
@import './stuStatistics';
</style>
