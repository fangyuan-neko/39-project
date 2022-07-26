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
        this.$router.push('/home')
      },
      toggle(index) {
        this.active = index;
      },
    },
  }
</script>

<style lang="less" scoped>
.left-dash{
  padding-left: 80px;
  padding-top: 30px;
  width: 250px;
  height: 60vh;
  // background-color: black;
}
.left-dash div{
  height: 34px;
  width: 120px;
  display: grid;
  place-content: center;
}
p{
  color: azure;
}
.clicked{
  background: url("@/assets/images/ActiveBtn.png") center/100% 100% no-repeat;
  margin-top: 40px;
}
.normal{
  background: url("@/assets/images/Btn.png") center/100% 100% no-repeat;
  margin-top: 40px;
}
.back{
  background: url("@/assets/images/HomeBtn.png") center/100% 100% no-repeat;
  margin-top: 53vh;
}
</style>