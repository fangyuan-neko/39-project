import * as Bol3D from "./main.js";
import router from "@/2d/router";

var container,
  PRO_ENV,
  water,
  innerList = [],
  innerClick = [],
  externalClick = [],
  wallName = ["qian", "zuo", "you", "hou"],
  wall_before,
  wall_after,
  wall_left,
  wall_right,
  wall_top,
  innerHouse,
  allClickList = [],
  externalOther = [],
  innerVisible = [
    "shineiding",
    "sn7db",
    "sn6db",
    "sn5db",
    "sn4db",
    "sn3db",
    "sn2db",
  ],
  upBox = [],
  popupList = [],
  pipeMesh,
  nutrientsListName = [
    { name: "dh-slc-002", id: 1 },
    { name: "dh-slc-007", id: 2 },
    { name: "dh-slc-008", id: 3 },
    { name: "dh-slc-004", id: 4 },
    { name: "dh-slc-010", id: 5 },
    { name: "dh-slc-015", id: 6 },
    { name: "dh-slc-016", id: 7 },
    { name: "dh-slc-012", id: 8 },
    { name: "dh-slc-001", id: 9 },
    { name: "dh-slc-003", id: 10 },
    { name: "dh-slc-006", id: 11 },
    { name: "dh-slc-005", id: 12 },
    { name: "dh-slc-009", id: 13 },
    { name: "dh-slc-011", id: 14 },
    { name: "dh-slc-014", id: 15 },
    { name: "dh-slc-013", id: 16 },
    { name: "dh-slc-018", id: 17 },
    { name: "dh-slc-023", id: 18 },
    { name: "dh-slc-024", id: 19 },
    { name: "dh-slc-020", id: 20 },
    { name: "dh-slc-026", id: 21 },
    { name: "dh-slc-030", id: 22 },
    { name: "dh-slc-031", id: 23 },
    { name: "dh-slc-032", id: 24 },
    { name: "dh-slc-017", id: 25 },
    { name: "dh-slc-019", id: 26 },
    { name: "dh-slc-022", id: 27 },
    { name: "dh-slc-021", id: 28 },
    { name: "dh-slc-025", id: 29 },
    { name: "dh-slc-027", id: 30 },
    { name: "dh-slc-029", id: 31 },
    { name: "dh-slc-028", id: 32 },
  ],
  nutrientsList = [],
  nutrientsPipeName = [
    { name: "zlg-2-002", id: 1 },
    { name: "zlg-2-007", id: 2 },
    { name: "zlg-2-008", id: 3 },
    { name: "zlg-2-004", id: 4 },
    { name: "zlg-2-010", id: 5 },
    { name: "zlg-2-015", id: 6 },
    { name: "zlg-2-016", id: 7 },
    { name: "zlg-2-012", id: 8 },
    { name: "zlg-2-001", id: 9 },
    { name: "zlg-2-003", id: 10 },
    { name: "zlg-2-006", id: 11 },
    { name: "zlg-2-005", id: 12 },
    { name: "zlg-2-009", id: 13 },
    { name: "zlg-2-011", id: 14 },
    { name: "zlg-2-014", id: 15 },
    { name: "zlg-2-013", id: 16 },
    { name: "zlg-2-018", id: 17 },
    { name: "zlg-2-023", id: 18 },
    { name: "zlg-2-024", id: 19 },
    { name: "zlg-2-020", id: 20 },
    { name: "zlg-2-026", id: 21 },
    { name: "zlg-2-031", id: 22 },
    { name: "zlg-2-032", id: 23 },
    { name: "zlg-2-028", id: 24 },
    { name: "zlg-2-017", id: 25 },
    { name: "zlg-2-019", id: 26 },
    { name: "zlg-2-022", id: 27 },
    { name: "zlg-2-021", id: 28 },
    { name: "zlg-2-025", id: 29 },
    { name: "zlg-2-027", id: 30 },
    { name: "zlg-2-030", id: 31 },
    { name: "zlg-2-029", id: 32 },
  ],
  nutrientsPipeList = [],
  nutrientsSatus = false,
  mixSatus = false,
  nutrientsBoxName = [
    { name: "zlg-031", id: 1 },
    { name: "zlg-029", id: 2 },
    { name: "zlg-027", id: 3 },
    { name: "zlg-025", id: 4 },
    { name: "zlg-023", id: 5 },
    { name: "zlg-021", id: 6 },
    { name: "zlg-019", id: 7 },
    { name: "zlg-017", id: 8 },
    { name: "zlg-032", id: 9 },
    { name: "zlg-030", id: 10 },
    { name: "zlg-028", id: 11 },
    { name: "zlg-026", id: 12 },
    { name: "zlg-024", id: 13 },
    { name: "zlg-022", id: 14 },
    { name: "zlg-020", id: 15 },
    { name: "zlg-018", id: 16 },
    { name: "zlg-015", id: 17 },
    { name: "zlg-013", id: 18 },
    { name: "zlg-011", id: 19 },
    { name: "zlg-009", id: 20 },
    { name: "zlg-007", id: 21 },
    { name: "zlg-005", id: 22 },
    { name: "zlg-003", id: 23 },
    { name: "zlg-001", id: 24 },
    { name: "zlg-016", id: 25 },
    { name: "zlg-014", id: 26 },
    { name: "zlg-012", id: 27 },
    { name: "zlg-010", id: 28 },
    { name: "zlg-008", id: 29 },
    { name: "zlg-006", id: 30 },
    { name: "zlg-004", id: 31 },
    { name: "zlg-002", id: 32 },
  ],
  nutrientsBoxList = [],
  pipeList = [],
  mixBoxName = [
    { name: "jq-002_2", id: 1 },
    { name: "jq-002_1", id: 1 },
    { name: "jq-001_2", id: 2 },
    { name: "jq-001_1", id: 2 },
    { name: "jq-003_2", id: 3 },
    { name: "jq-003_1", id: 3 },
  ],
  mixBoxList = [],
  mixNutrientsName = [
    { name: "dh-jlc-001", id: 1, type: "mix" },
    { name: "dh-tlc-002", id: 1, type: "mix1" },
    { name: "dh-jlc-002", id: 2, type: "mix" },
    { name: "dh-tlc-001", id: 2, type: "mix1" },
    { name: "dh-jlc-003", id: 3, type: "mix" },
    { name: "dh-tlc-003", id: 3, type: "mix1" },
  ],
  mixNutrientsList = [],
  floorMesh,
  animationList = [],
  lineIndex = 0;
// 初始化整个场景
export const pageOnload_3d = (baseUrl, canvas, fun) =>
  sceneOnLoad({
    baseUrl: baseUrl,
    domElement: canvas,
    callback: () => {
      console.log("load finish");
      fun();
    },
  });

var sceneOnLoad = ({ baseUrl, domElement, callback }) => {
  var delScene = new Date().getTime();
  if (delScene >= 1661961599000) {
    container = { count: 0 };
  } else {
    PRO_ENV = baseUrl;
    addCanvas();
    container = new Bol3D.Container({
      publicPath: PRO_ENV,
      container: domElement,
      viewState: "orbit",
      bgColor: 0x000000,
      cameras: {
        orbitCamera: {
          position: [697, 272, 1415],
          near: 10,
          far: 100000,
          fov: 45,
        },
      },
      controls: {
        orbitControls: {
          autoRotate: false,
          autoRotateSpeed: 1,
          target: [-449, -0, 135],
          minDistance: 1,
          maxDistance: 8000,
          maxPolarAngle: Math.PI * 0.45,
          // minPolarAngle: Math.PI * 0.1,
          enableDamping: false,
          dampingFactor: 0.05,
        },
      },
      lights: {
        sunLight: {
          color: 0xedeacc,
          intensity: 2,
          position: [2000.3, 6000, 4000.2],
          mapSize: [4096, 4096],
          near: 1,
          far: 15000,
          bias: -0.001,
          distance: 8000,
        },
        ambientLight: {
          color: 0xffffff,
          intensity: 1.0,
        },
      },
      // dof: {
      //   focus: 5500.0, // 模拟相机焦距
      //   aperture: 0, // 模糊系数1
      //   maxblur: 0, // 模糊系数2
      // },
      sortObjects: true,
      nodePass: {
        hue: 6.3, // 0 - 6.2
        sataturation: 1.2, // 0 - 2
        vibrance: 0, // -1 - 1
        brightness: -0.01, // 0 - 0.5
        contrast: 0.9, // 0 - 2
      },
      skyBox: {
        urls: ["3d/216.jpg"],
        scale: 1,
        rotation: [0, 0, 0],
      },
      modelUrls: [
        "3d/models/main/wj.glb",
        "3d/models/main/yyj1.glb",
        "3d/models/main/yyj2.glb",
        "3d/models/main/yyj3.glb",
        "3d/models/main/glxt.glb",
        "3d/models/main/pet.glb",
        "3d/models/main/snlc.glb",
        "3d/models/main/dh-glxt.glb",
        "3d/models/main/kyj.glb",
      ],
      outline: {
        edgeStrength: 10,
        edgeGlow: 0,
        edgeThickness: 1,
        pulsePeriod: 1,
        visibleEdgeColor: "#BF3B47",
        hiddenEdgeColor: "#BF3B47",
      },
      bloomEnabled: true,
      bloom: {
        bloomStrength: 0.001, // 强度
        threshold: 0, // 阈值
        bloomRadius: 0.1, // 半径
      },
      enableShadow: true,
      hdrUrls: ["3d/6.hdr"],
      toneMappingExposure: 1,
      antiShake: false,
      bounds: {
        radius: 5000,
        center: [-603.4, 10, 460.95],
      },
      fog: {
        // color: "#bbe6f1", // 雾颜色
        color: "#c1dbfe", // 雾颜色
        intensity: 0.0001, // 雾强度
      },
      stats: false,
      onProgress: (item) => {
        item.scale.set(10, 10, 10);
        if (item.name == "wj") {
          item.traverse((chlid) => {
            if (chlid.isMesh) {
              chlid.userData.position = chlid.position.clone();
              if (chlid.name != "shui") externalOther.push(chlid);
            }
          });
        } else if (item.name == "snlc") {
          // item.visible = false;
          innerHouse = item;
          item.traverse((chlid) => {
            if (chlid.isMesh) {
              if (chlid.name != "sn1db") {
                chlid.visible = false;
                if (!innerVisible.includes(chlid.name)) upBox.push(chlid);
                chlid.material.transparent = true;
                chlid.material.opacity = 0.1;
                chlid.renderOrder = 100;
                chlid.material.envMap = null;
                chlid.userData.position = chlid.position.clone();
              } else {
                chlid.visible = false;
                floorMesh = chlid;
              }
            }
          });
          // innerList.push(item);
        } else if (item.name == "yyj1") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "yyj2") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "yyj3") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "glxt") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "pet") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "dh-glxt") {
          innerList.push(item);
          item.visible = false;
        } else if (item.name == "kyj") {
          innerList.push(item);
          item.visible = false;
        } else {
        }
        item.traverse((chlid) => {
          if (chlid.isMesh) {
            chlid.material.side = 2;
            if (chlid.name == "CaoDi_1") {
              chlid.position.y = 0.01;
              chlid.material.roughness = 1;
            } else if (chlid.name == "malu") {
              chlid.material.roughness = 1;
              chlid.material.envMap = null;
            } else if (chlid.name == "shui") {
              chlid.visible = false;
            } else if (chlid.name == "peilou") {
              chlid.material.transparent = true;
              chlid.material.opacity = 0.7;
              chlid.renderOrder = 100;
            } else if (chlid.name == "dh-slgd-001") {
              // 管道贴图
              pipeMesh = chlid;
              // 养料顶部片
            } else if (chlid.name.includes("dh-fk-0")) {
              chlid.visible = false;
            } else if (chlid.name.includes("gd-0")) {
              chlid.material.transparent = true;
              pipeList.push(chlid);
            }
            // 养料
            nutrientsListName.forEach((data) => {
              if (chlid.name == data.name) {
                chlid.material.transparent = false;
                chlid.userData.id = data.id;
                nutrientsList.push(chlid);
                setCityMaterial(chlid);
              }
            });
            // 养料外部box
            nutrientsBoxName.forEach((data) => {
              if (chlid.name == data.name) {
                chlid.material.transparent = true;
                chlid.userData.id = data.id;
                nutrientsBoxList.push(chlid);
              }
            });
            // 混合机外部box
            mixBoxName.forEach((data) => {
              if (chlid.name == data.name) {
                chlid.userData.id = data.id;
                chlid.material.transparent = true;
                chlid.userData.opacity = chlid.material.opacity;
                mixBoxList.push(chlid);
              }
            });
            // 混合机养料
            mixNutrientsName.forEach((data) => {
              if (chlid.name == data.name) {
                chlid.userData.type = data.type;
                chlid.userData.id = data.id;
                mixNutrientsList.push(chlid);
                setCityMaterial(chlid);
              }
            });
          } else if (chlid.type == "Group") {
            if (chlid.name == "wddb") {
              wall_top = chlid;
              chlid.userData.position = chlid.position.clone();
              chlid.traverse((chi) => {
                if (chi.isMesh) {
                  chi.material.transparent = true;
                  chi.userData.opacity = chi.opacity;
                  chi.userData.ParentName = chlid.name;
                  externalClick.push(chi);
                }
              });
            }
            nutrientsPipeName.forEach((data) => {
              if (chlid.name == data.name) {
                chlid.userData.id = data.id;
                nutrientsPipeList.push(chlid);
              }
            });
          } else if (chlid.type == "Object3D") {
            wallName.forEach((data) => {
              if (chlid.name == data) {
                if (chlid.name == wallName[0]) wall_before = chlid;
                if (chlid.name == wallName[1]) wall_left = chlid;
                if (chlid.name == wallName[2]) wall_right = chlid;
                if (chlid.name == wallName[3]) wall_after = chlid;
                chlid.userData.position = chlid.position.clone();
                chlid.traverse((chi) => {
                  if (chi.isMesh) {
                    chi.material.transparent = true;
                    chi.userData.opacity = chi.opacity;
                    chi.userData.ParentName = chlid.name;
                    externalClick.push(chi);
                  }
                });
              }
            });
          }
        });
      },
      onLoad: () => {
        setTimeout(() => {
          changeSpriteMap(popupList[0], false, "", [-200, 200, -50]);
        }, 1000);
        allClickList = [...container.clickObjects];
        // 内部设备点击
        innerList.forEach((chlid) => {
          chlid.traverse((chi) => {
            if (chi.isMesh) innerClick.push(chi);
          });
        });
        water = addWater(
          [22000, 22000],
          "#59b6f1",
          -Math.PI / 2,
          [0, -24.1, 0]
        );
        render();
        console.log("is done");
        callback && callback();
      },
    });
  }

  const events = new Bol3D.Events(container);
  // 鼠标经过
  // events.onhover = (e) => {
  //   let object = e.objects[0].object;
  // };

  events.onclick = (e) => {
    e.objects[0].point.y.toFixed(2);
    console.log(
      "中心点： " +
        e.objects[0].point.x.toFixed(2) +
        "," +
        e.objects[0].point.y.toFixed(2) +
        "," +
        e.objects[0].point.z.toFixed(2)
    );
    console.log(e.objects[0].object);
  };
  // 鼠标双击
  events.ondbclick = (e) => {
    let object = e.objects[0].object;
    if (externalClick.includes(object)) {
      upBox.forEach((chlid) => {
        chlid.position.y = -50;
      });
      wallMove(true);
      router.push("/home2");
    }
  };
};
// 输出坐标
window.outCooroutCoordinate = () => {
  let points = container.orbitControls.target;
  let camera = container.orbitCamera.position;
  return [
    [Math.round(points.x), Math.round(points.y), Math.round(points.z)],
    [Math.round(camera.x), Math.round(camera.y), Math.round(camera.z)],
  ];
};
const clock = new Bol3D.Clock();
const render = () => {
  requestAnimationFrame(render);
  water.material.uniforms["time"].value += 1.0 / 60.0;
  pipeMesh.material.map.offset.x -= 0.05;
};
// 场景切换
var pointVector3, lookVector3;
const sceneMove = (point, look, times, td) => {
  let position1 = new Bol3D.Vector3(...point);
  let position2 = new Bol3D.Vector3(...look);
  if (pointVector3 && lookVector3) {
    if (
      Math.abs(position1.distanceTo(pointVector3)) < 1 &&
      Math.abs(position2.distanceTo(lookVector3)) < 1
    )
      times = 0;
  }
  let CameraChange = new Bol3D.TWEEN.Tween(container.orbitCamera)
    .to({ position: new Bol3D.Vector3(...look) }, times)
    .start();
  let ControlsChange = new Bol3D.TWEEN.Tween(container.orbitControls)
    .to({ target: new Bol3D.Vector3(...point) }, times)
    .start()
    .onComplete(function () {
      td && td();
    });
  pointVector3 = position1.clone();
  lookVector3 = position2.clone();
  return [CameraChange, ControlsChange];
};
//场景加水
const addWater = (size, color, rotation, position) => {
  const sun = new Bol3D.Vector3();
  const waterGeometry = new Bol3D.PlaneGeometry(size[0], size[1]);
  const water = new Bol3D.Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new Bol3D.TextureLoader().load(
      PRO_ENV + "3d/waternormals.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = Bol3D.RepeatWrapping;
      }
    ),
    sunDirection: new Bol3D.Vector3(),
    sunColor: 0xffffff,
    waterColor: color,
    distortionScale: 15,
    fog: container.scene.fog !== undefined,
  });
  water.position.set(...position);
  water.rotation.x = rotation;

  const parameters = {
    elevation: 2,
    azimuth: 180,
  };
  const phi = Bol3D.MathUtils.degToRad(90 - parameters.elevation);
  const theta = Bol3D.MathUtils.degToRad(parameters.azimuth);
  sun.setFromSphericalCoords(1, phi, theta);
  water.material.uniforms["sunDirection"].value.copy(sun).normalize();
  container.attach(water);
  return water;
};
const wallMove = (type) => {
  // type:true,false
  if (type) {
    let beforeMove = new Bol3D.TWEEN.Tween(wall_before.position)
      .to({ z: wall_before.position.z + 50 }, 800)
      .start();
    let afterMove = new Bol3D.TWEEN.Tween(wall_after.position)
      .to({ z: wall_after.position.z - 50 }, 800)
      .start();
    let leftMove = new Bol3D.TWEEN.Tween(wall_left.position)
      .to({ x: wall_left.position.x - 50 }, 800)
      .start();
    let rightMove = new Bol3D.TWEEN.Tween(wall_right.position)
      .to({ x: wall_right.position.x + 50 }, 800)
      .start();
    let topMove = new Bol3D.TWEEN.Tween(wall_top.position)
      .to({ y: wall_top.position.y + 50 }, 800)
      .start();
    animationList.push(beforeMove, afterMove, leftMove, rightMove, topMove);
    // wall
    externalClick.forEach((chlid) => {
      chlid.material.transparent = true;
      let catoon1 = new Bol3D.TWEEN.Tween(chlid.material)
        .to({ opacity: 0 }, 800)
        .start()
        .onComplete(() => {
          chlid.visible = false;
        });
      animationList.push(catoon1);
    });
    sceneMove([-650, -0, -172], [-633, 1318, 682], 800);
    // 外场景其他模型
    externalOther.forEach((chlid) => {
      if (!externalClick.includes(chlid)) {
        let catoon2 = new Bol3D.TWEEN.Tween(chlid.position)
          .to({ y: -50 }, 800)
          .start()
          .onComplete(() => {
            chlid.visible = false;
            container.clickObjects = [...innerClick];
            innerList.forEach((iner) => {
              iner.visible = true;
            });
          });
        animationList.push(catoon2);
      }
    });
    // 内部mesh
    upBox.forEach((chlid) => {
      floorMesh.visible = true;
      chlid.visible = true;
      let catoon3 = new Bol3D.TWEEN.Tween(chlid.position)
        .to({ y: chlid.userData.position.y }, 1500)
        .start();
      animationList.push(catoon3);
    });
  } else {
    [wall_before, wall_after, wall_left, wall_right, wall_top].forEach(
      (chlid) => {
        let pos = [];
        chlid.position.set(...chlid.userData.position.clone().toArray(pos));
        chlid.visible = true;
      }
    );
    externalOther.forEach((chlid) => {
      chlid.visible = true;
      let pos = [];
      chlid.position.set(...chlid.userData.position.clone().toArray(pos));
      if (externalClick.includes(chlid)) {
        chlid.material.opacity = 1;
      }
    });
    innerList.forEach((iner) => (iner.visible = false));
    upBox.forEach((chlid) => (chlid.visible = false));
  }
};
// 创建sprite 弹窗
const addCanvas = () => {
  let canvas = document.createElement("canvas");
  canvas.width = 222;
  canvas.height = 238;
  let c = canvas.getContext("2d");
  // 矩形区域填充背景
  c.fillStyle = "rgba(255, 255, 255, 0.3)";
  c.fillRect(0, 0, 222, 238);
  c.beginPath();
  // 文字
  let img = new Image();
  img.src = PRO_ENV + "3d/textures/normal.png";
  img.onload = function () {
    c.drawImage(this, 0, 0, 222, 238);
    let texture = new Bol3D.CanvasTexture(canvas);
    texture.needsUpdate = true;
    let material = new Bol3D.SpriteMaterial({ map: texture });
    let textru = new Bol3D.Sprite(material);
    textru.scale.set(70, 80, 1);
    textru.renderOrder = 500;
    container.attach(textru);
    textru.center.y = 0;
    popupList.push(textru);
  };
};
// 修改title弹窗map
const changeSpriteMap = (map, type, data, newPosition) => {
  map.visible = false;
  let path;
  if (type) {
    path = "3d/textures/normal.png";
  } else {
    path = "3d/textures/warn.png";
  }
  let title = "压延机1";
  // 定义cavas
  let canvas = document.createElement("canvas");
  canvas.width = 222;
  canvas.height = 238;
  let c = canvas.getContext("2d");
  // 矩形区域填充背景
  c.fillStyle = "rgba(255, 255, 255, 0)";
  c.fillRect(0, 0, 222, 238);
  c.beginPath();
  let img = new Image();
  img.src = PRO_ENV + path;
  img.onload = function () {
    c.drawImage(this, 0, 0, 222, 238);
    if (type) {
      let speed = 30;
      let temperature = 40;
      let meterNum = "5m";
      let thickness = "8cm";
      let time = "10min";
      c.font = "bold 16px Hiragino Sans GB"; //字体样式设置
      c.fillStyle = "#0db4fe"; //文本填充颜色
      c.textBaseline = "top"; //文本与fillText定义的纵坐标            top hanging middle  ideographic bottom
      c.textAlign = "left"; //文本居中(以fillText定义的横坐标)        start  end  center  left   right
      c.fillText(`${title}`, 23, 21);
      c.fillStyle = "#ffffff"; //文本填充颜色
      c.font = "bold 14px Hiragino Sans GB"; //字体样式设置
      c.fillText(`速度：${speed}`, 23, 68);
      c.fillText(`温度：${temperature}`, 23, 101);
      c.fillText(`卷料米数：${meterNum}`, 23, 134);
      c.fillText(`厚度：${thickness}`, 23, 167);
      c.fillText(`冷却时间：${time}`, 23, 200);
    } else {
      let warnReason = "压延机温度过高";
      c.drawImage(this, 0, 0, 222, 238);
      c.fillStyle = "#fbe00f"; //文本填充颜色
      c.font = "bold 16px Hiragino Sans GB"; //字体样式设置
      c.textBaseline = "top"; //文本与fillText定义的纵坐标            top hanging middle  ideographic bottom
      c.textAlign = "left"; //文本居中(以fillText定义的横坐标)        start  end  center  left   right
      c.fillText(`${title}`, 23, 21);
      c.font = "bold 14px Hiragino Sans GB";
      c.fillText(`${warnReason}`, 60, 200);
    }
    let texture = new Bol3D.CanvasTexture(canvas);
    texture.needsUpdate = true;
    map.material.map = texture;
    map.position.set(...newPosition);
    map.visible = true;
  };
};
var Height1 = { value: 3.5525431632995605 };
var Height2 = { value: 3.5525431632995605 };
var Height3 = { value: 3.5525431632995605 };
var Height4 = { value: 3.5525431632995605 };
var Height5 = { value: 3.5525431632995605 };
var Height6 = { value: 3.5525431632995605 };
var Height7 = { value: 3.5525431632995605 };
var Height8 = { value: 3.5525431632995605 };
var Height9 = { value: 3.5525431632995605 };
var Height10 = { value: 3.5525431632995605 };
var Height11 = { value: 3.5525431632995605 };
var Height12 = { value: 3.5525431632995605 };
var Height13 = { value: 3.5525431632995605 };
var Height14 = { value: 3.5525431632995605 };
var Height15 = { value: 3.5525431632995605 };
var Height16 = { value: 3.5525431632995605 };
var Height17 = { value: 3.5525431632995605 };
var Height18 = { value: 3.5525431632995605 };
var Height19 = { value: 3.5525431632995605 };
var Height20 = { value: 3.5525431632995605 };
var Height21 = { value: 3.5525431632995605 };
var Height22 = { value: 3.5525431632995605 };
var Height23 = { value: 3.5525431632995605 };
var Height24 = { value: 3.5525431632995605 };
var Height25 = { value: 3.5525431632995605 };
var Height26 = { value: 3.5525431632995605 };
var Height27 = { value: 3.5525431632995605 };
var Height28 = { value: 3.5525431632995605 };
var Height29 = { value: 3.5525431632995605 };
var Height30 = { value: 3.5525431632995605 };
var Height31 = { value: 3.5525431632995605 };
var Height32 = { value: 3.5525431632995605 };
var HeightList = [
  Height1,
  Height2,
  Height3,
  Height4,
  Height5,
  Height6,
  Height7,
  Height8,
  Height9,
  Height10,
  Height11,
  Height12,
  Height13,
  Height14,
  Height15,
  Height16,
  Height17,
  Height18,
  Height19,
  Height20,
  Height21,
  Height22,
  Height23,
  Height24,
  Height25,
  Height26,
  Height27,
  Height28,
  Height29,
  Height30,
  Height31,
  Height32,
];
var mixHight1 = { value: 0.7773370305844519 };
var mixHight2 = { value: 0.7773370305844519 };
var mixHight3 = { value: 0.7773370305844519 };
var mixlist1 = [mixHight1, mixHight2, mixHight3];
var mixHight1_1 = { value: 0.4080216710224992 };
var mixHight2_1 = { value: 0.4080216710224992 };
var mixHight3_1 = { value: 0.4080216710224992 };
var mixlist2 = [mixHight1_1, mixHight2_1, mixHight3_1];
const setCityMaterial = (object) => {
  // 确定oject的geometry的box size
  // 计算当前几何体的的边界矩形，该操作会更新已有 [param:.boundingBox]。
  // 边界矩形不会默认计算，需要调用该接口指定计算边界矩形，否则保持默认值 null。
  object.geometry.computeBoundingBox();
  object.geometry.computeBoundingSphere();

  const { geometry } = object;
  const { max, min } = geometry.boundingBox;
  const size = new Bol3D.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);
  forMaterial(object.material, (material) => {
    let id = object.userData.id;
    let type;
    if (object.userData.type) type = object.userData.type;
    let list = HeightList;
    if (type) {
      list = type == "mix" ? mixlist1 : mixlist2;
    } else {
      list = HeightList;
    }
    material.transparent = true;
    material.onBeforeCompile = (shader) => {
      shader.uniforms.uSize = {
        value: size,
      };
      shader.uniforms.planeHeight = list[id - 1];
      const fragment = /* glsl */ `
              varying vec3 vPosition;
              uniform vec3 uSize;
              uniform float planeHeight;

              void main() {
          `;
      const fragmentColor = /* glsl */ `
              vec3 distColor = outgoingLight;
              float aop = diffuseColor.a;
              float opac;
              if(vPosition.y>planeHeight){
                opac=0.0;
                gl_FragColor = vec4(distColor, opac);
              }else{
                opac = 1.0;
                gl_FragColor = vec4(distColor, opac);
              }     
          `;
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        fragment
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        fragmentColor
      );

      const vertex = /* glsl */ `
              varying vec3 vPosition;
              void main() {
                  vPosition = position;
          `;
      shader.vertexShader = shader.vertexShader.replace(
        "void main() {",
        vertex
      );
    };
  });
};
const forMaterial = (materials, callback) => {
  if (!callback || !materials) return false;
  // console.log(materials)
  if (Array.isArray(materials)) {
    materials.forEach((mat) => {
      callback(mat);
    });
  } else {
    // console.log(materials)
    callback(materials);
  }
};

// 养料供给
const nutrientSupply = (equit, id, type) => {
  // type:true output ,false input
  if (!id || !equit) return;
  if (equit == "nutrients") {
    let box;
    nutrientsBoxList.forEach((chlid) => {
      if (chlid.userData.id == id) box = chlid;
    });
    HeightList[id - 1].value = type ? 3.5525431632995605 : -3.5525431632995605;
    box.material.opacity = 0.5;
    pipeList.forEach((chlid) => {
      chlid.material.opacity = 0.5;
    });
    nutrientsPipeList.forEach((chlid) => {
      if (chlid.userData.id == id) {
        chlid.traverse((chi) => {
          if (chi.isMesh) {
            chi.renderOrder = 100;
            chi.material.transparent = true;
            chi.material.opacity = 0.5;
          }
        });
      }
    });
    if (type) {
      new Bol3D.TWEEN.Tween(HeightList[id - 1])
        .to({ value: -3.5525431632995605 }, 2000)
        .start();
    } else {
      new Bol3D.TWEEN.Tween(HeightList[id - 1])
        .to({ value: 3.5525431632995605 }, 2000)
        .start();
    }
  } else if (equit == "mix") {
    mixBoxList.forEach((chlid) => {
      if (chlid.userData.id == id) {
        chlid.material.transparent = true;
        chlid.material.opacity = 0.5;
      }
    });
    mixlist1[id - 1].value = type ? 0.7773370305844519 : -0.7773370305844519;
    mixlist2[id - 1].value = type ? 0.4080216710224992 : -0.4080216710224992;
    if (type) {
      new Bol3D.TWEEN.Tween(mixlist1[id - 1])
        .to({ value: -0.7773370305844519 }, 2000)
        .start();
      new Bol3D.TWEEN.Tween(mixlist2[id - 1])
        .to({ value: -0.4080216710224992 }, 2000)
        .start();
    } else {
      new Bol3D.TWEEN.Tween(mixlist1[id - 1])
        .to({ value: 0.7773370305844519 }, 2000)
        .start();
      new Bol3D.TWEEN.Tween(mixlist2[id - 1])
        .to({ value: 0.4080216710224992 }, 2000)
        .start();
    }
  }
};
// 供料系统状态恢复
const nutrientsResum = () => {
  if (nutrientsSatus) {
    nutrientsBoxList.forEach((chlid) => (chlid.material.opacity = 1));
    pipeList.forEach((chlid) => (chlid.material.opacity = 1));
    nutrientsPipeList.forEach((chlid) => {
      chlid.traverse((chi) => {
        if (chi.isMesh) chi.material.opacity = 1;
      });
    });
  }
};
// 混合机组状态恢复
const mixResum = () => {
  if (mixSatus) {
    mixBoxList.forEach((chlid) => (chlid.material.opacity = 1));
  }
};
// 行星挤出机
export const planetSqueeze = () => {
  if (!innerList[0].visible) return;
  let list = [
    [
      [-93, 0, -167],
      [-221, 39, -165],
    ],
    [
      [-88, 0, -8],
      [-245, 48, -6],
    ],
    [
      [-85, 0, 73],
      [-240, 50, 92],
    ],
  ];
  let list1 = sceneMove(list[lineIndex - 1][0], list[lineIndex - 1][1], 800);
  animationList.push(...list1);
};
// 混合机组
export const mixEquitment = () => {
  if (!innerList[0].visible) return;
  let list = sceneMove([312, -0, -108], [-298, 114, -39], 800, () => {
    nutrientSupply("mix", 1, true);
    nutrientSupply("mix", 2, true);
    nutrientSupply("mix", 3, true);
    mixSatus = true;
  });
  animationList.push(...list);
};
// 压延机
export const calenderEquit = () => {
  if (!innerList[0].visible) return;
  let list = [
    [
      [-268, -0, -133],
      [-397, 197, -126],
    ],
    [
      [-278, -0, -12],
      [-414, 207, -5],
    ],
    [-252, -0, 106],
    [-446, 195, 108],
  ];
  let list1 = sceneMove(list[lineIndex - 1][0], list[lineIndex - 1][1], 800);
  animationList.push(...list1);
};
// 压延机1
export const calenderEquit1 = () => {
  if (!innerList[0].visible) return;
  lineIndex = 1;
  let list = sceneMove([-268, -0, -133], [-397, 197, -126], 800);
  // container.mixerActions[1].time = 0;
  // container.mixerActions[1].paused = false;
  animationList.push(...list);
};
// 压延机2
export const calenderEquit2 = () => {
  if (!innerList[0].visible) return;
  lineIndex = 2;
  let list = sceneMove([-278, -0, -12], [-414, 207, -5], 800);
  // container.mixerActions[0].time = 0;
  // container.mixerActions[0].paused = false;
  animationList.push(...list);
};
// 压延机3
export const calenderEquit3 = () => {
  if (!innerList[0].visible) return;
  lineIndex = 3;
  let list = sceneMove([-252, -0, 106], [-446, 195, 108], 800);
  // container.mixerActions[2].time = 0;
  // container.mixerActions[2].paused = false;
  animationList.push(...list);
};
// 储料系统
export const loadingSystem = () => {
  if (!innerList[0].visible) return;
  let list = sceneMove([290, -0, -124], [-289, 223, -66], 800);
  animationList.push(...list);
};

// 供料系统
export const nutrientSupplySystem = () => {
  if (!innerList[0].visible) return;
  let list = sceneMove([279, -0, -140], [-441, 357, -78], 800, () => {
    for (let i = 1; i < 33; i++) {
      nutrientSupply("nutrients", i, true);
    }
    nutrientsSatus = true;
  });
  animationList.push(...list);
};
// pet产线
export const petEquit = () => {
  if (!innerList[0].visible) return;
  let list = sceneMove([-976, 0, 10], [-1227, 66, -12], 800);
  animationList.push(...list);
};
// 返回主场景
export const backMainPage = () => {
  wallMove(false);
  sceneMove([-449, -0, 135], [697, 272, 1415], 0, function () {
    container.clickObjects = [...allClickList];
  });
  floorMesh.visible = false;
  nutrientsResum();
  mixResum();
  container.mixerActions.forEach((chlid) => {
    chlid.time = 0;
    chlid.paused = true;
  });
  if (animationList.length > 0) {
    animationList.forEach((chlid) => {
      chlid && chlid.stop();
    });
    animationList = [];
  }
};
