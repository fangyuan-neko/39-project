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
      toggle(index) {
        this.active = index;
      },
      backToHome() {
        this.$router.push('/home')
      },
    }
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
  margin-top: 60vh;
}
</style>