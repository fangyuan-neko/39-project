<template>
  <div class="scene-box">
    <canvas style="width: 100%; height: 100%" ref="canvasEl"> </canvas>
  </div>
</template>

<script lang="js">
// import { createCanvas } from "@/util/dom";
// const canvas: HTMLCanvasElement = createCanvas();
import {ref,onMounted} from 'vue';
import {pageOnload} from "@/3d/js/index";



export default {

 name:'Scene',
 setup(props) {
  const canvasEl = ref()

  console.log(canvasEl.value)

  onMounted(() => {
    console.log(canvasEl.value)

    pageOnload(canvasEl.value)
  })

  return{
    canvasEl
  }
 }
}
</script>
