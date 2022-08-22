<template>
  <div class="main">
    <img src="@/assets/images/Title.png" alt="标题" id="title">
    <clock-dash class="clock-view"></clock-dash>
    <!-- <three-dimension-dock></three-dimension-dock> -->
    <!-- <component :is="currentComponent"></component> -->
    <router-view></router-view>
  </div>
  <scene></scene>
</template>

<script>
import ClockDash from "./components/ClockDash.vue";
// import ThreeDimensionDock from "./compontents/3dDock.vue";
import Scene from "@/3d/views/Scene.vue";


export default {
  name: 'App',
  data() {
    return {
      currentComponent: "FactoryHomeView"
    }
  },
  components: {ClockDash,Scene},
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
}
.three-dimension{
  position: absolute;
}
.clock-view{
  position: absolute;
  margin-top: 7vh;
  margin-left: 82vw;
}
.main{
  position: absolute;
  z-index: 2;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  background-image: url("@/assets/images/背景框@2x.png"), url("@/assets/images/back2.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>>
