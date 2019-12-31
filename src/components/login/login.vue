<template>
    <div class="content">
      <div class="content-item">
        <h2>JavaScript与jQuery教学辅助平台</h2>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="username">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="text"
              v-model="ruleForm.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item class="select-type" prop="password">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item class="select-type" label="">
            <el-radio-group v-model="ruleForm.type" size="medium">
              <el-radio  label="teacher">教师</el-radio>
              <el-radio  label="student">学生</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="medium" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
        <p class="foot">还没有账号？&nbsp;<router-link to="/register" class="register"  >马上注册</router-link></p>
      </div>
    </div>
</template>

<script>
import login from "./login.js";
export default login;
</script>

<style lang="scss" scoped>
@import "./login.scss";
</style>
