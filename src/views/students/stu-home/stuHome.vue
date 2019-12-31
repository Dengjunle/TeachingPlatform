<template>
  <el-container>
    <headers />
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
                  <div>总章节数：{{ userinfo.minCount }}</div>
                  <div>
                    已完成：{{
                      userinfo.finishMin ? userinfo.finishMin.length : 0
                    }}
                  </div>
                  <div>学习人数：{{ userinfo.count }}</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple grid-content-right">
                <div class="schedule-progress">
                  <div class="content-top-left-message schedule-study">
                    <span>姓名：{{ userinfo.name }}</span>
                    <span>学号：{{ userinfo.id }}</span>
                  </div>
                  <div class="schedule-progress-speed">
                    <span
                      >学习进度：{{
                        parseInt(
                          ((userinfo.finishMin
                            ? userinfo.finishMin.length
                            : 0) /
                            userinfo.minCount) *
                            100
                        )
                      }}%</span
                    >
                  </div>
                  <el-progress
                    :text-inside="true"
                    :stroke-width="22"
                    :percentage="
                      parseInt(
                        ((userinfo.finishMin ? userinfo.finishMin.length : 0) /
                          userinfo.minCount) *
                          100
                      )
                    "
                    status="warning"
                  ></el-progress>
                  <div class="schedule-progress-lasttime" v-if="userinfo.doingMin">
                    <span>{{userinfo.doingMin.length > 0? `上次学至${userinfo.minName}`: ""}}</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="content-center">
        <div class="content-center-item">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/student/course">课程章节</el-menu-item>
            <el-menu-item index="/student/discuss">学习讨论</el-menu-item>
            <el-menu-item index="/student/statistics">成绩统计</el-menu-item>
            <el-menu-item index="/student/resources">学习资源</el-menu-item>
            <el-button type="success" @click="continueStudy" round
              >继续上次学习</el-button
            >
          </el-menu>
          <div class="line"></div>
        </div>
      </div>
      <div class="content-footer">
        <div class="content-footer-item">
          <keep-alive><router-view></router-view></keep-alive>
        </div>
      </div>
    </el-main>
    <el-footer class="footers"><footers /></el-footer>
  </el-container>
</template>

<script>
import stuHome from "./stuHome";
export default stuHome;
</script>

<style lang="scss" scoped>
@import "./stuHome";
</style>
