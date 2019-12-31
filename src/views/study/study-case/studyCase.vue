<template>
  <div class="case">
    <div class="case-left">
      <div class="study-movie">
        <el-collapse-transition>
          <div v-show="show3" class="study-content">
            <video
              controls="controls"
              :src="'/static/' + studyInfo.videoUrl"
              height="400"
            ></video>
          </div>
        </el-collapse-transition>
        <div class="study-btn" @click="show3 = !show3">
          <img src="../../../assets/img/mubu.svg" width="100%" height="100%" />
        </div>
      </div>
      <div role="tabpanel" class="tab-pane active" id="knowledge">
        <iframe
          :src="'/static/' + studyInfo.knowledgeUrl"
          frameborder="0"
          width="100%"
          height="100%"
          name="main"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
    <div class="case-right">
      <div class="right-top">
        <el-tabs class="tabs" v-model="activeName" type="card">
          <el-tab-pane class="tabs-item" label="案例1" name="first">
            <iframe ref="anli" class="anli" frameborder="0"></iframe>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right-center">
        <el-button type="primary" @click="send">点击运行</el-button>
      </div>
      <div class="right-bottom">
        <codemirrors :curCode="curCode" @onChanges="changes" />
      </div>
    </div>
  </div>
</template>

<script>
import studyCase from "./studyCase";
export default studyCase;
</script>

<style lang="scss" scoped>
@import "./studyCase";
</style>
