import {
  pageOnload_3d,
  planetSqueeze,
  mixEquitment,
  calenderEquit,
  calenderEquit1,
  calenderEquit2,
  calenderEquit3,
  loadingSystem,
  nutrientSupplySystem,
  petEquit,
  backMainPage,
} from "./industryEquip.js";

var baseUrl = "/3dModel/";
// var baseUrl = "https://www.kantu3d.com/demo/2207/sanjiu/3dModel/";

// 初始化整个场景
export const pageOnload = (canvas, fun) => {
  pageOnload_3d(baseUrl, canvas, fun);
};
// 行星挤出机
export const planetSqueezeEquitment = () => {
  planetSqueeze();
};
// // 混合机组
export const mixingUnit = () => {
  mixEquitment();
};
// 压延机
export const calenderEquitment = () => {
  calenderEquit();
};
// 压延机1
export const calenderEquitment_one = () => {
  calenderEquit1();
};
// 压延机2
export const calenderEquitment_two = () => {
  calenderEquit2();
};
// 压延机3
export const calenderEquitment_three = () => {
  calenderEquit3();
};
// pet产线
export const petLine = () => {
  petEquit();
};
//储料系统
export const loadingSystemEquit = () => {
  loadingSystem();
};
// 供料系统
export const nutrientSupplySystemAction = () => {
  nutrientSupplySystem();
};
// 返回主场景
export const backMainPerspective = () => {
  backMainPage();
};
