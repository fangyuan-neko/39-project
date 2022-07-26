<template>
  <div class="main">
    <img src="@/assets/images/Title.png" alt="标题" id="title">
    <clock-dash class="clock-view"></clock-dash>
    <!-- <component :is="currentComponent"></component> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ClockDash from "./components/ClockDash.vue";


export default {
  name: 'App',
  data() {
    return {
      currentComponent: "FactoryHomeView"
    }
  },
  components: {ClockDash}
}
</script>

<style lang="less" scoped>
#title{
  // font-size: 40px;
  // place-content: center;
  // place-items: center;
  // margin-top: 2vh;
  // text-align: center;
  top: 45px;
  left: 660px;
  position: absolute;
  height: 82px;
  width: 645px;
  // background: url("@/assets/");
}
.three-dimension{
  position: absolute;
}
.clock-view{
  position: absolute;
  margin-top: 5vh;
  margin-left: 85vw;
}
.main{
  height: 100vh;
  background-image: url("@/assets/images/背景框@2x.png"), url("@/assets/images/back2.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>>
