import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls";

export default class Utils {
  constructor(options = {}) {
    this.scene = options.scene;
    this.camera = options.camera;
    this.renderer = options.renderer;

    if (!this.scene || !this.camera || !this.renderer) {
      console.error("scene, camera, renderer can not be null");
      return;
    }
    this.init(options);
  }
  init(options) {
    this.initOrbitControls(options.orbitControl);
    this.initAxesHelper(options.axesHelper);
    this.initGridHelper(options.gridHelper);
  }
  // 默认开启轨道控制器， 只有当传入的orbitControl===false时关闭
  initOrbitControls(value) {
    if (value === false) {
      console.log("orbitControl disabled");
      return;
    }

    new OrbitControls(this.camera, this.renderer.domElement);
  }
  // 默认开启坐标轴辅助工具， 只有当传入的axesHelper===false时关闭
  initAxesHelper(value) {
    if (value === false) {
      console.log("axesHelper disabled");
      return;
    }

    const init = {
      size: 10,
    };
    const params = Object.assign(init, value);

    const axesHelper = new THREE.AxesHelper(params.size);
    this.scene.add(axesHelper);
  }
  // 默认开启网格辅助工具， 只有当传入的gridHelper===false时关闭
  initGridHelper(value) {
    if (value === false) {
      console.log("gridHelper disabled");
      return;
    }
    const init = {
      size: 20,
      divisions: 20,
      color1: 0xffffff,
      color2: 0xffffff,
    };
    const params = Object.assign(init, value);

    const gridHelper = new THREE.GridHelper(...Object.values(params));
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;

    this.scene.add(gridHelper);
  }
}
