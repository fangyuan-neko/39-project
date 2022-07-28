<template>
  <div class="left-dash">
    <!-- <div :class="[active ? clicked : normal]"><p>压延线1</p></div>
    <div :class="[active ? clicked : normal]"><p>压延线2</p></div>
    <div :class="[active ? clicked : normal]"><p>压延线3</p></div>
    <div :class="[active ? clicked : normal]"><p>PET产线</p></div> -->
    <div
    v-for="(status, index) in statuses"
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
    name: "ProductionLine",
    data() {
      return {
        active: 0,
        statuses: ['压延线1', '压延线2', '压延线3', 'PET产线'],
      }
    },
    methods: {
      // 切换页面函数，点击以后会被触发。index是按钮的顺序，分别有0123
      toggle(index) {
        this.active = index;
      },
      backToHome() {
        this.$router.push('/home')
      },
    }
  }
</script>

<style lang="less">
.left-dash{
  padding-left: 80px;
  padding-top: 30px;
  width: 250px;
  height: 60vh;
  // background-color: black;
}
.left-dash div{
  height: 40px;
  width: 160px;
  display: grid;
  place-content: center;
}
p{
  color: azure;
  font-size: 20px;
}
.clicked{
  background: url("@/assets/images/ActiveBtn.png") center/100% 100% no-repeat;
  margin-top: 40px;
}
.normal{
  background: url("@/assets/images/Btn.png") center/100% 100% no-repeat;
  margin-top: 40px;
}
.left-dash .back{
  height: 43px;
  width: 180px;
}
.back{
  background: url("@/assets/images/HomeBtn.png") center/100% 100% no-repeat;
  margin-top: 630px;
  padding-right: 40px;
  font-size: 15px;
}
</style>