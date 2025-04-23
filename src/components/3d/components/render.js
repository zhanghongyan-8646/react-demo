import * as THREE from "three";

function isFunction(val) {
  return typeof val === "function";
}

class Render extends THREE.WebGLRender {
  constructor(scene, camera) {
    super({ antialias: true });
    this.scene = scene;
    this.camera = camera;
    this.init();
  }
  init() {
    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.domElement);

    // 默认渲染
    this.render(this.scene, this.camera);
  }
  animation(cb) {
    if (!isFunction(cb)) {
      console.error("param must be a function");
      return;
    }

    this.setAnimationLoop(cb);
  }
}

export default Render;
