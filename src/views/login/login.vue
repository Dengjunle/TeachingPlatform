<template>
  <div class="mianBox">
    <img src="../../assets/images/yun0.png" alt="" class="yun yun0" />
    <img src="../../assets/images/yun1.png" alt="" class="yun yun1" />
    <img src="../../assets/images/yun2.png" alt="" class="yun yun2" />
    <img src="../../assets/images/bird.png" alt="" class="bird" />
    <img src="../../assets/images/san.png" alt="" class="san" />
    <router-view></router-view>
    <div class="footers"><a href="http://www.beian.miit.gov.cn" target="_blank">粤ICP备20002187号</a></div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    components:{

    }
}
</script>

<style lang="scss" scoped>
@import "./login.scss";
.footers{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #ccc;
  opacity:0.5;
  text-align: center;
  line-height: 50px;
}
</style>
