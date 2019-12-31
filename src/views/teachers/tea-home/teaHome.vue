<template>
  <div>
      <headers/>
      <el-main class="main">
      <div class="content-top">
        <div class="content-top-item">
          <el-row :gutter="0" type="flex" align="middle" class="row">
            <el-col :span="8">
              <div class="grid-content bg-purple grid-content-left">
                <div class="content-top-left-title">
                  <h2 class="title">JavaScript与jQuery实战教程</h2>
                </div>
                <div class="content-top-left-msg">
                  <div class="content-top-left-msg-portrait">
                    <img src="../../../assets/img/touxiang.jpeg" alt="头像" />
                  </div>
                  <div class="content-top-left-msg-msg">
                    <div class="content-top-left-msg-people">
                      <span>主讲：卢淑萍</span><span>讲师</span>
                    </div>
                    <div class="content-top-left-msg-four">
                      <img src="../../../assets/img/tel.png" alt="电话" /><img
                        src="../../../assets/img/email.png"
                        alt="邮件"
                      /><img src="../../../assets/img/QQ.png" alt="QQ" /><img
                        src="../../../assets/img/weixin.png"
                        alt="微信"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple grid-content-center">
                <div class="content-top-left-rightmsg">
                  <div>总学习人数：{{ userinfo.count }}</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
            </el-col>
          </el-row>
        </div>
      </div>
      <keep-alive><router-view></router-view></keep-alive>
      </el-main>
      <el-footer class="footers"><footers /></el-footer>
  </div>
</template>

<script>
import teaHome from './teaHome';
export default teaHome;
</script>

<style lang="scss" scoped>
    @import './teaHome';
</style>