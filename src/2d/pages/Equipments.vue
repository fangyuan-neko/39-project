<template>
  <div class="left-dash">
    <!-- <div :class="clicked" @click="mixer()"><p>混合机组</p></div>
    <div :class="normal" @click="planetPusher()"><p>行星挤出机</p></div>
    <div :class="normal" @click="pusher()"><p>压延机</p></div>
    <div :class="normal" @click="storage()"><p>储料系统</p></div>
    <div :class="normal" @click="provider()"><p>供料系统</p></div> -->
    <div
    v-for="(status, index) in items"
    :key="index"
    :class="active == index ? 'clicked' : 'normal'"
    @click="toggle(index)"
    >
      <p>{{ status }}</p>
    </div>
    <div class="back" @click="backToHome()"><p>返回主场景</p></div>
  </div>
</template>

<script>
  export default {
    name: "EquipmentsView",
    data() {
      return {
        active: 0,
        // status: "background: url(\"@/assets/images/Btn.png\") center/100% 100% no-repeat;",
        items: ['混合机组', '行星挤出机', '压延机', '储料系统', '供料系统']
      }
    },
    methods: {
      backToHome() {
        this.$router.push('/home');
      },
      // 切换页面函数，，点击以后会被触发。index是按钮的顺序，分别有01234
      toggle(index) {
        this.active = index;
      },
    },
  }
</script>

<style lang="less" scoped>
.back{
  background: url("@/assets/images/HomeBtn.png") center/100% 100% no-repeat;
  margin-top: 51vh; 
}
</style>