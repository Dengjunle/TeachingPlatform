<template>
  <div class="mianBox">
    <img src="../../assets/images/yun0.png" alt="" class="yun yun0" />
    <img src="../../assets/images/yun1.png" alt="" class="yun yun1" />
    <img src="../../assets/images/yun2.png" alt="" class="yun yun2" />
    <img src="../../assets/images/bird.png" alt="" class="bird" />
    <img src="../../assets/images/san.png" alt="" class="san" />
    <router-view></router-view>
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
</style>
