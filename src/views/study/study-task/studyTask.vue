<template>
  <div class="task">
    <div class="task-left">
      <div class="task-left-top boders">
        <div role="tabpanel" class="tab-pane active" id="knowledge">
          <iframe
            ref="modular"
            class="anli"
            frameborder="0"
            width="100%"
            height="100%"
            scrolling="auto"
          ></iframe>
        </div>
      </div>
      <div class="task-left-bottom boders">
        <div class="right-center">
          <el-button type="primary" @click="send">点击运行</el-button>
          <el-button
            type="primary"
            @click="submission"
            :disabled="userinfo.finishMin.indexOf(studyParam.id * 1) != -1"
            >{{
              userinfo.finishMin.indexOf(studyParam.id * 1) != -1
                ? "已提交"
                : "提交代码"
            }}</el-button
          >
        </div>
        <div class="right-bottom">
          <codemirrors :curCode="curCode" @onChanges="changes" />
        </div>
      </div>
    </div>

    <div class="task-right">
      <div class="task-right-top boders">
        <div role="tabpanel" class="tab-pane active" id="knowledge">
          <div class="title">作业效果</div>
          <iframe
            :src="'/static/' + studyInfo.anLi.homeworkCodeTemplate"
            frameborder="0"
            width="100%"
            height="100%"
            name="main"
            scrolling="auto"
          ></iframe>
        </div>
      </div>
      <div class="task-right-bottom boders">
        <div class="right-top">
          <iframe ref="task" class="anli" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import studyTask from "./studyTask";
export default studyTask;
</script>

<style lang="scss" scoped>
@import "./studyTask";
</style>
