<template>
  <p>
    <span class="time">{{ time }}</span>
    <span class="date">{{ date }}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{month}}</span>
  </p>
</template>

<script>
  function getMonth() {
    let d = new Date();
    switch (d.getDay()) {
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      case 6:
        return "星期六";
      case 7:
          return "星期天";
    }
    // console.log(d.getDay());
    return "请检查系统时间";
  }
  export default {
    name: "ClockDash",
    mounted() {
      // let that = this;
      this.timer = setInterval(() => {
        let date = new Date();
        this.time = `${date.getHours().toString()}: ${date.getMinutes().toString()}: ${date.getSeconds().toString()}`;
        this.date = `${date.toLocaleDateString()}`;
        this.month = getMonth();
      });
    },
    methods: {
      // getDate() {
      // 	let date = new Date();
      // 	let year = date.getFullYear();
      // 	let month = date.getMonth();
      // 	let day = date.getDate();
      // 	return [year, month, day]
      // }
    },
    data() {
      return {
        time: "",
        date: "",
        month: ""
      }
    },
  }
</script>

<style lang="less" scoped>
p{
  color: azure;
}
.time{
    font-size: 20px;
    display: inline-block;
    width: 100px;
}
.date{
    font-size: 14px;
}
</style>