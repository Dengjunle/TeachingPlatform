<template>
  <div>
    <div class="discuss-liuyanban">
      <h4>发表问题:</h4>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="新建话题"
        v-model="textarea"
      >
      </el-input>
      <div class="send">
        <el-button type="success" @click="handleSend">发布</el-button>
      </div>
    </div>

    <div class="discuss-plate" v-for="(item, index) in discuss" :key="index">
      <div class="discuss-msg">
        <div class="name">
          <span
            class="iconfont "
            :class="item.type === 1 ? 'icon-laoshirenzheng1' : 'icon-xuesheng'"
          ></span>
          <span
            >{{ item.name }}&nbsp;&nbsp;{{
              item.type === 1 ? "老师" : "学生"
            }}</span
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{
            item.time | formatDate
          }}</span>
        </div>
        <h3 class="content">{{ item.content }}</h3>
      </div>
      <div class="discuss-content">
        <div v-for="(items, indexs) in item.returnSend" :key="indexs">
          <div>
            <span>{{ items.name }}</span
            ><span>{{ items.time | formatDate }}</span>
          </div>
          <div class="content">
            <p>
              {{ items.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="discuss-reply">
        <el-input placeholder="发表想法" v-model="item.input" clearable>
        </el-input>
        <div class="send">
          <el-button type="success" @click="addReply(index)">回复</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import discuss from './discuss';
export default discuss;
</script>

<style lang="scss" scoped>
@import './discuss';
</style>
