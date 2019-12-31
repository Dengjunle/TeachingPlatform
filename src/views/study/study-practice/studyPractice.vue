<template>
  <div class="practice">
    <div class="practice-left">
      <div role="tabpanel" class="tab-pane active" id="knowledge">
        <iframe
          :src="'/static/' + studyInfo.practiceUrl"
          frameborder="0"
          width="100%"
          height="100%"
          name="main"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
    <div class="practice-right">
      <div class="right-top">
        <el-tabs class="tabs" v-model="activeName" type="card">
          <el-tab-pane class="tabs-item" label="第1题" name="first">
            <iframe ref="practice" class="anli" frameborder="0"></iframe>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right-center">
        <el-button type="primary" @click="send">点击运行</el-button>
        <el-button type="primary" @click="checkCode">查看源代码</el-button>
      </div>
      <div class="right-bottom">
        <codemirrors :curCode="curCode" @onChanges="changes" />
      </div>
    </div>
  </div>
</template>

<script>
import studyPractice from "./studyPractice";
export default studyPractice;
</script>

<style lang="scss" scoped>
@import "./studyPractice";
</style>
