<template>
  <div>
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
          <div
            class="content-box"
            v-for="(items, indexs) in item.minutiaList"
            :key="indexs"
            @click="goToGrades(items)"
          >
            <span class="iconfont icon-bofangqi-bofangxiaodianshi">
              <span class="title">{{ items.minutiaTitle }}</span>
            </span>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import teaCourse from './teaCourse';
export default teaCourse;
</script>

<style lang="scss" scoped  >
@import './teaCourse';
</style>
