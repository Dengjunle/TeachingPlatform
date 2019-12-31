<template>
  <el-header>
    <div class="headers">
      <div class="headers-title">
        <i class="iconfont icon-jquery"></i>
        JavaScript教学辅助平台
      </div>
      <div class="headers-content">
        欢迎你，{{ userinfo.name }}{{type=='teacher'?'老师':'同学'}}
        <div class="content-item" @click="loginOut">
          <i class="iconfont icon-login" ></i>
          注销
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
import header from "./headers";
export default header;
</script>

<style lang="scss" scoped>
@import "./headers";
</style>
