<template>
    <div class="content">
      <div class="content-item">
        <h2>个人信息注册</h2>
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
              placeholder="请输入2-12位的用户名"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="stuNum">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="number"
              v-model="ruleForm.stuNum"
              placeholder="请输入学号"
            ></el-input>
          </el-form-item>
          <el-form-item label="" class="select-type"  prop="stuName">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="text"
              v-model="ruleForm.stuName"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item  class="select-type" >
            <el-radio-group v-model="ruleForm.sex" size="medium">
              <el-radio  label="男"></el-radio>
              <el-radio  label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="" prop="pwd">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="password"
              v-model="ruleForm.pwd"
              autocomplete="off"
              placeholder="请输入6-18位密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="rePassword">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="password"
              v-model="ruleForm.rePassword"
              autocomplete="off"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="phone">
            <el-input
              prefix-icon="iconfont icon-icon-test"
              type="text"
              v-model="ruleForm.phone"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="success" size="medium" @click="submitForm('ruleForm')"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
        <p class="foot">已有账号!&nbsp;<router-link to="/login" class="register"  >马上登陆</router-link></p>
      </div>
    </div>
</template>

<script>
import register from './register';
export default register;
</script>

<style lang="scss" scoped>
@import './register.scss';
</style>