<template>
  <div>
    <headers />
    <div class="content">
      <div class="content-item">
        <div class="header">
          <div class="back" @click="back">
            <i class="iconfont icon-back"></i>
          </div>
          <div class="title">
            <span>第{{ $route.query.id * 1 + 1 }}章测验题</span>
          </div>
          <div class="score">
            <span v-if="isShow">成绩：{{ form.stuQuestion.score }}</span>
          </div>
        </div>
        <el-form ref="form" label-width="100%" :model="form">
          <el-form-item
            :label="index + 1 + '.' + item.topic"
            v-for="(item, index) in form.questionList"
            :key="index"
            :prop="'questionList.' + index + '.radio'"
            :rules="[{ required: true, message: '必选' }]"
          >
            <el-radio-group v-model="item.radio">
              <el-radio label="A" :disabled="isShow" border
                >A.{{ item.a }}</el-radio
              >
              <el-radio label="B" :disabled="isShow" border
                >B.{{ item.b }}</el-radio
              >
              <el-radio label="C" :disabled="isShow" border
                >C.{{ item.c }}</el-radio
              >
              <el-radio label="D" :disabled="isShow" border
                >D.{{ item.d }}</el-radio
              >
            </el-radio-group>
            <div class="answer" v-if="isShow">答案：{{ item.answer }}</div>
            <div v-if="isShow" class="result">
              <i
                class="iconfont"
                :class="item.answer == item.radio ? 'icon-duigou' : 'icon-V'"
              ></i>
            </div>
          </el-form-item>
          <el-form-item class="footer">
            <el-button :disabled="isShow" type="primary" @click="onSubmit"
              >提交</el-button
            >
            <el-button :disabled="isShow" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footers />
  </div>
</template>

<script>
import stuTest from "./stuTest";
export default stuTest;
</script>

<style lang="scss" scoped>
@import "./stuTest";
</style>
