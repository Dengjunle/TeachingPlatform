<template>
  <div>
      <div class="content-center">
        <div class="content-center-item">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/teacher/content/course">请选择对应章节进行对学生评分</el-menu-item>
            <el-menu-item index="/teacher/content/discuss">学习讨论区</el-menu-item>
            <el-menu-item index="/teacher/content/score">学习统计区</el-menu-item>
          </el-menu>
          <div class="line"></div>
        </div>
      </div>
      <div class="content-footer">
        <div class="content-footer-item">
          <keep-alive><router-view></router-view></keep-alive>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './teaContent'
</style>