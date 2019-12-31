<template>
  <div>
    <div class="headers">
      <div class="headers-item">
        <div class="back" @click="back">
          <i class="iconfont icon-back"></i>
          <span class="content"
            >第{{ studyParam.chapterId * 1 + 1 }}章：{{
              studyParam.minutiaTitle
            }}</span
          >
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-item">
        <div class="content">
          <el-tabs
            v-model="activeTab"
            type="border-card"
            @tab-click="handleClick"
          >
            <el-tab-pane label="同学列表" name="stuList">
              <el-tabs
                v-model="activeName"
                type="card"
                @tab-click="handleClicks"
              >
                <el-tab-pane label="未提交" name="first">
                  <div
                    class="tab-item"
                    v-for="(item, index) in notSubmittedList"
                    :key="index"
                  >
                    <span
                      ><i class="iconfont icon-xuesheng"></i
                      >{{ item.name }}</span
                    ><span>未提交</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已提交" name="second">
                  <div
                    class="tab-item"
                    v-for="(item, index) in submittedList"
                    :key="index"
                    @click="goToTask(item)"
                  >
                    <span
                      ><i class="iconfont icon-xuesheng"></i
                      >{{ item.name }}</span
                    ><span>未批改</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已评分" name="third">
                  <div
                    class="tab-item"
                    v-for="(item, index) in scoredList"
                    :key="index"
                    @click="goToTask(item)"
                  >
                    <span
                      ><i class="iconfont icon-xuesheng"></i
                      >{{ item.name }}</span
                    ><span>{{ item.homework.score }}分</span>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="评分处" name="stuScore">
              <div class="student">{{ stuData.name }}</div>
              <div class="top">
                <iframe ref="task" class="task" frameborder="0"></iframe>
              </div>
              <div class="center">
                <el-button type="primary" @click="send">点击运行</el-button>
                <el-input
                  v-model="input"
                  type="number"
                  maxlength="2"
                  placeholder="请输入分数"
                ></el-input>
                <el-button type="primary" @click="addScore">提交分数</el-button>
              </div>
              <div class="bottom">
                <codemirrors :curCode="curCode" @onChanges="changes" />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teaGrades from './teaGrades';
export default teaGrades;
</script>

<style lang="scss" scoped>
@import './teaGrades';
</style>
