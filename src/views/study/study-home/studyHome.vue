<template>
  <div class="home">
    <el-container>
      <el-header><headers /></el-header>
      <el-container>
        <div class="tabmenu">
          <div class="tabmenu-item">
            <el-button class="tabmenu-back" @click="goBack" type="primary">
              <i class="iconfont icon-shouye-copy"></i>
            </el-button>
            <div v-show="!isCollapse" class="menuTitle">课程目录</div>
          </div>
          <el-menu
            :default-active="studyParam.minutiaTitle"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-button
              class="tabmenu-coll"
              @click="isCollapse = !isCollapse"
              type="primary"
              ><i
                class="iconfont"
                :class="isCollapse ? 'icon-arrow-right' : 'icon-arrow-left'"
              ></i
            ></el-button>
            <el-submenu
              v-for="(item, index) in courseinfo"
              :key="item.chapterTitle"
              :index="item.chapterTitle"
            >
              <template slot="title">
                <i class="iconfont icon-xunzhang">{{ index + 1 }}</i>
                <span slot="title">{{ item.chapterTitle }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="items in item.minutiaList"
                  :key="items.minutiaTitle"
                  :index="items.minutiaTitle"
                  @click="goToStudy(items)"
                  >{{ items.minutiaTitle }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
        <el-main>
          <div class="content-center">
            <div class="content-center-item">
              <el-menu
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                router
              >
                <el-menu-item index="/study/case">案例学习</el-menu-item>
                <li class="el-menu-item">
                  <i class="iconfont icon-fanhui"></i>
                </li>
                <el-menu-item index="/study/courseware">课件学习</el-menu-item>
                <li class="el-menu-item">
                  <i class="iconfont icon-fanhui"></i>
                </li>
                <el-menu-item index="/study/practice">练一练</el-menu-item>
                <li class="el-menu-item">
                  <i class="iconfont icon-fanhui"></i>
                </li>
                <el-menu-item index="/study/task">课后作业</el-menu-item>
              </el-menu>
            </div>
          </div>
          <div class="content-footer">
            <div class="content-footer-item">
              <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import studyHome from "./studyHome";
export default studyHome;
</script>

<style lang="scss" scoped>
@import "./studyHome";
</style>
