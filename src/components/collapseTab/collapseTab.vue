<template>
  <div>
    <div class="header">
      <div class="title">
        <span class="iconfont icon-fanhui"
          ><span class="content">学习建议：</span></span
        >
      </div>
      <div class="content-title">
        <span>
          做出一个优秀的开源作品，是所有前端程序员都引以为豪的事情，本课程将带你从零开始做一个完整的前端开源作品。包括开源作品的内容，做什么方向的项
          目更容易被关注，如何正注册github账号，如何提交和升级代码，如何写文档并制作官网，最后介绍作者持续运维开源项目的一些经验。做出一个优秀的开源作
          品，是所有前端程序员都引以为豪的事情，本课程将带你从零开始做一个完整的前端开源作品。
        </span>
      </div>
    </div>
    <div class="header" v-for="(item, index) in courseinfo" :key="index">
      <div class="title" @click="item.show = !item.show">
        <span class="iconfont icon-fanhui"
          ><span class="content"
            >第{{ index + 1 }}章&nbsp;{{ item.chapterTitle }}</span
          ></span
        ><span
          class="iconfont icon-updown"
          :class="{ active: item.show }"
        ></span>
      </div>
      <el-collapse-transition>
        <div v-show="item.show" class="content">
          <div class="content-box" @click="handleShowModal(item)">
            <span class="iconfont icon-xunzhang"
              ><span class="title">本章概述</span></span
            >
          </div>
          <div
            class="content-box"
            v-for="(items, indexs) in item.minutiaList"
            :key="indexs"
            @click="goToStudy(items)"
          >
            <span class="iconfont icon-bofangqi-bofangxiaodianshi">
              <span class="title">{{ items.minutiaTitle }}</span>
            </span>
            <span v-if="userinfo.finishMin.indexOf(items.id*1)!=-1" class="status" ><span>已学习<span v-if="items.score">({{items.score}}分)</span></span><i class="iconfont icon-wancheng1" ></i></span>
             <span v-if="userinfo.doingMin.indexOf(items.id*1)!=-1"  class="status" ><span>学习中</span> <i class="iconfont icon-weikaishi1" ></i></span>
              <span v-if="userinfo.finishMin.indexOf(items.id*1)==userinfo.doingMin.indexOf(items.id*1)"  class="status" ><span>未学习</span>  <i class="iconfont icon-weikaishi" ></i></span>
          </div>
          <div class="content-box" @click="goToTest(item)" >
            <span class="iconfont icon-renwu"><span class="title">章节测验</span></span>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <el-dialog
      width="870px"
      :title="title"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div>
        <iframe
          :src="'/static/' + page_url"
          width="100%"
          height="1000"
          name="main"
          scrolling="hidden"
          frameborder="0"
        ></iframe>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import collapseTab from "./collapseTab";
export default collapseTab;
</script>

<style lang="scss" scoped>
@import "./collapseTab";
</style>
